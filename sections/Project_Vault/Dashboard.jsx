"use client"
import React from 'react'
import { SidebarMain } from './SidebarMain'
import useTabStore from '@/Tabstore/tabstore'
import Webdev from './Webdev'
import Posters from './Posters'
import Thumbnail from './Thumbnail'

const Dashboard = () => {
    const { currentTab } = useTabStore()

    const renderContent = () => {
        switch (currentTab) {
            case 1:
                return <Webdev />
            case 2:
                return <div>Home 2</div>
            case 3:
                return <div>Home 3</div>
            case 4:
                return <Thumbnail/>
            case 5:
                return <Posters/>
            default:
                return <div>Welcome</div>
        }
    }

    return (
        <div className='mt-64'>
            <SidebarMain>
                <div className="flex flex-1">
                    <div
                        className="flex h-full w-full flex-1 flex-col rounded-r-md gap-2 p-2 md:p-10 overflow-y-auto"
                    >
                        {renderContent()}
                    </div>
                </div>


            </SidebarMain>
        </div>
    )
}

export default Dashboard
