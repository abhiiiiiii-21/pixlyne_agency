"use client"
import React, { useRef } from 'react'
import { SidebarMain } from './SidebarMain'
import useTabStore from '@/Tabstore/tabstore'
import Webdev from './Webdev'
import Posters from './Posters'
import Thumbnail from './Thumbnail'
import LongForm from './LongForm'
import { WorkBadge } from './WorkBadge'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reels from './Reels'

const Dashboard = () => {
    const { currentTab } = useTabStore()

    const renderContent = () => {
        switch (currentTab) {
            case 1:
                return <Webdev />
            case 2:
                return <Reels/>
            case 3:
                return <LongForm />
            case 4:
                return <Thumbnail />
            case 5:
                return <Posters />
            default:
                return <div>Welcome</div>
        }
    }

    return (
        <div>

            <WorkBadge />

            <div className="mb-20 font-raleway flex flex-col items-center text-center justify-center gap-3 tracking-tight leading-none">
                <p className="text-neutral-200 text-5xl font-medium">
                    Crafted with <span className="font-instrument-serif italic text-[#0055FE]">Precision</span>
                </p>
                <p className="text-neutral-500">
                    Each project reflects our commitment to clean design, bold ideas, and seamless execution.
                </p>
            </div>

            <SidebarMain>
                <div className="flex flex-1 h-full">
                    <div
                        className="relative flex w-full flex-1 flex-col rounded-r-md gap-2 p-2 md:p-10 overflow-y-auto"
                    >
                        {renderContent()}
                    </div>
                </div>
            </SidebarMain>

        </div>
    )
}

export default Dashboard