<template>
    <nav :class="'flex items-center bg-[#4eaee1] h-[60px] sm:h-[70px] px-2 justify-between pl-5 pr-[30px] transition-all duration-150 ' + (showSideBar? 'w-[calc(100vw-200px)] float-right':'w-full float-right')">

        <div class="flex items-center justify-between gap-8">
            <button @mouseover="hamberIconOverHandler = true" @mouseout="hamberIconOverHandler = false" @click="toggleSideBar">
                <v-icon  name="gi-hamburger-menu" :fill="hamberIconOverHandler? 'black':'white'" :scale="1.5"></v-icon>
            </button>
            <div class="relative group/file">
                <button class="text-white text-lg font-medium flex items-center gap-1 py-4 group-hover/file:text-black ">
                    Source Files
                </button>
                <ul class="absolute bg-white w-[250px] rounded-md shadow-lg  top-12 left-0 invisible opacity-0 group-hover/file:visible group-hover/file:opacity-100 py-2 transition-all duration-150">
                    <li>
                        <input type="button" value="Choose Source File" @click="openFileDialog" class="cursor-pointer hover:bg-[#eeeeee] text-md text-black py-1 px-6  hover:text-[#4DB7FE]  w-full flex items-center justify-between"/>
                        <input type="file" id="source_file"  hidden/>
                    </li>
                    <li class="text-md text-black py-1 px-6 mt-2 hover:text-[#4DB7FE] flex items-center justify-between">
                        <input class="w-[150px] focus:border-[#4eaee1] border-black border px-2" type="text" placeholder="Enter URL">
                        <button class="text-white bg-[#4eaee1] px-2 rounded-sm hover:bg-[#3e8ee1]">
                            View
                        </button>
                    </li>
                </ul>
            </div>

            <ul class="flex items-center gap-4">
                <li
                    class="relative group/parent"
                    v-for="item in navigation"
                    :key="item.id"
                >
                    <button class="text-white text-lg font-medium flex items-center gap-1 py-4 group-hover/parent:text-black">
                        {{ item.title }}
                        <v-icon v-if="item && item.children" name="md-keyboardarrowdown" :scale="1"/>
                    </button>
                    <ul
                        v-if="item && item.children"
                        class="absolute bg-white w-[250px] top-12 rounded-md shadow-lg left-0 invisible opacity-0 group-hover/parent:visible group-hover/parent:opacity-100 py-2 transition-all duration-150"
                        
                        >
                        <li 
                            v-for="subItem in item.children" 
                            :key="subItem.id" 
                            class="pointer relative group/children1">
                            <button
                                class="hover:bg-[#eeeeee] text-md py-1 px-6  hover:text-[#4DB7FE] text-black w-full flex items-center justify-between gap-1"
                            >
                               {{ subItem.title }}
                              <v-icon v-if="subItem && subItem.children" name="md-arrowforwardios" fill="black" :scale="0.5"/>
                           </button>
                           <ul
                                v-if="subItem && subItem.children"
                                class="absolute bg-white w-[300px] rounded-md shadow-lg left-[100%] top-0 invisible opacity-0 group-hover/children1:visible group-hover/children1:opacity-100 py-2 transition-all duration-150"
                            >
                                <li 
                                    v-for="subItem2 in subItem.children" 
                                    :key="subItem2.id"
                                    class="pointer relative group/children2"
                                >
                                    <button class="hover:bg-[#eeeeee] text-md text-black py-1 px-6  hover:text-[#4DB7FE] w-full flex items-center justify-between">
                                        {{ subItem2.title }}
                                        <v-icon v-if="subItem2 && subItem2.children" name="md-arrowforwardios" fill="black" :scale="0.5"/>
                                    </button>
                                    
                                    <ul
                                        v-if="subItem2 && subItem2.children"
                                        class="absolute bg-white w-[300px] rounded-md shadow-lg left-[100%] top-0 invisible opacity-0 group-hover/children2:visible group-hover/children2:opacity-100 py-2 transition-all duration-150"
                                    >
                                        <li 
                                            v-for="subItem3 in subItem2.children" 
                                            :key="subItem3.id" 
                                        >
                                            
                                            <button v-if="subItem3.title" class="hover:bg-[#eeeeee] text-md text-black py-1 px-6  hover:text-[#4DB7FE] w-full flex items-center justify-between">
                                                {{ subItem3.title }}
                                                <!-- <v-icon v-if="subItem3 && subItem3.children" name="md-arrowforwardios" fill="black" :scale="0.5"/> -->
                                            </button>
                                            <div v-else class="hover:bg-[#eeeeee] text-md text-black py-1 px-6  hover:text-[#4DB7FE] w-full flex items-center justify-between">
                                                <input class="focus:border-[#4eaee1] border-black border px-2" type="text" :placeholder="subItem3.placeholder">
                                                <button class="text-white bg-[#4eaee1] px-2 rounded-sm hover:bg-[#3e8ee1]">
                                                    Go
                                                </button>
                                            </div>
                                        </li>
                                    </ul>

                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <ul class="flex items-center gap-4">
            <span>🟢</span>
            <button @mouseover="expandIconOverHandler = true" @mouseout="expandIconOverHandler = false" @click="toggleScreenMode">
                <v-icon v-if="!isFullScreen" :fill="expandIconOverHandler? 'black':'white'" name="fa-expand-arrows-alt" :scale="1.2" ></v-icon>
                <v-icon v-else :fill="expandIconOverHandler? 'black':'white'" name="fa-compress-arrows-alt" :scale="1.2"></v-icon>
            </button>
            <button @mouseover="commentIconOverHandler = true" @mouseout="commentIconOverHandler = false">
                <v-icon name="fa-comments" :fill="commentIconOverHandler ? 'black':'white'"  :scale="1.2"></v-icon>
            </button>
            <button @mouseover="signoutIconOverHandler = true" @mouseout="signoutIconOverHandler = false">
                <v-icon name="fa-sign-out-alt" :fill="signoutIconOverHandler ? 'black':'white'" :scale="1.2"></v-icon>
            </button>
        </ul>
    </nav>
</template>

<script>
import config from '@/config'
export default {
    name:"Header",
    data(){
        return {
            showMobileMenu:false,
            isFullScreen: false,
            hamberIconOverHandler: false,
            commentIconOverHandler:false,
            expandIconOverHandler:false,
            signoutIconOverHandler:false,
            showSideBar:false,
            navigation:config.navigation.list
        }

    },
    methods:{
        openFileDialog(){
            let fileInput = document.getElementById('source_file')
            fileInput.click();
        },
        toggleSideBar(){
            this.showSideBar = !this.showSideBar
        },
        toggleScreenMode(){

            if( window.innerHeight == screen.height) {
                    // browser is fullscreen
                    document.exitFullscreen()
                    this.isFullScreen = false
            } else {
                document.body.requestFullscreen()
                this.isFullScreen = true
            }
        }
    }
}
</script>
