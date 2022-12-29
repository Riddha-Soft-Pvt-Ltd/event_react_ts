
import { createContext, useEffect, useState } from 'react'

import axios from 'axios';
import { httpGetVisitors, httpSearchVisitors } from '../http/visitors';
import { deleteVisitors, editVisitors } from '../http/endpoints/endpoints';

import { toast } from 'react-toastify';
import { customHeader } from '../utils/token.utils';

export const VisitorContext = createContext<any>([]);

const VisitorContextContainer = ({ children }: { children: any }) => {
    const [visitors, setVisitors] = useState<[]>([]);
    const [skipTake, setSkipTake] = useState({ skip: 0, take: 10 });
    const [initialLoader, setInitialLoader] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState<[]>([]);
    const [searchMode, setSearchMode] = useState(false);
    const [searchLoader, setSearchLoader] = useState(false);

    const closeSearchMode = () => {
        setSearchMode(false);
        setSearchData([]);
        getVisitorData();
    }

    const loadMoreVisitors = async () => {
        const skip = skipTake.skip + 10;
        setSkipTake({ ...skipTake, skip: skip });
        const visitorsData = await httpGetVisitors(skip, skipTake.take);
        console.log('ok')
        setVisitors([...visitors, ...visitorsData]);
    }

    const getVisitorData = async () => {
        setInitialLoader(true);
        setSkipTake({ skip: 0, take: 10 });
        const visitorsData = await httpGetVisitors(0, 10);
        setVisitors(visitorsData);
        setInitialLoader(false);
    }

    const searchVisitors = async () => {
        setSearchLoader(true);
        setSearchMode(true);
        const searchedVisitors = await httpSearchVisitors(searchText);
        setSearchData(searchedVisitors);
        setSearchLoader(false);
    }

    const deleteUser = async (id: string) => {
        await axios.delete(deleteVisitors(id), { headers: customHeader() }).then((response) => {
            if (response && response.data && response.data.success) {
                getVisitorData();
                if (searchMode) {
                    searchVisitors();
                }
            }
            toast.error(response.data.message)
        }).catch((err) => {
            toast.error(err.message);
        });
    }

    const updateVisitor = async (id: string, data: any) => {
        await axios.post(editVisitors(id), data, { headers: customHeader() })
            .then((resp) => {
                if (resp && resp.data && resp.data.success) {
                    getVisitorData();
                    toast.success('Updated Successfully')
                } else {
                    toast.success(resp.data.message ?? "")
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const contextValue = {
        getVisitorData,
        visitors,
        initialLoader,
        searchVisitors,
        searchData,
        searchMode,
        deleteUser,
        updateVisitor,
        closeSearchMode,
        loadMoreVisitors,
        searchText,
        setSearchText,
        searchLoader
    }

    return (
        <VisitorContext.Provider value={contextValue}>
            {children}
        </VisitorContext.Provider>

    )
}

export default VisitorContextContainer;