import React from 'react';

function Profile(props:any) {
    return (
        <div className='h-screen' >
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front'/>
                </div>
                <div className="text-center mt-2">
                    <h2 data-testid="name" className="font-semibold">Sarah Smith</h2>
                    <p className="text-gray-500">Freelance Web Designer</p>
                </div>
                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    <li className="flex flex-col items-center justify-around">
                        <svg fill="#7DD3FC" width="35px" height="35px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#7DD3FC" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M11.593965,2.08736316 C11.8155418,1.98891464 12.0639725,1.97485056 12.2932219,2.04517094 L12.406035,2.08736316 L21.406035,6.08614246 C21.7680046,6.24696874 21.9974374,6.60402426 22.0000116,6.99295906 L21.9938837,7.11043153 L21.421479,12.2620742 C21.1288947,14.8953332 19.6919006,17.2604209 17.5024605,18.7341239 L17.2465158,18.9001752 L12.5299989,21.8479983 C12.2417587,22.0281485 11.8846299,22.0481651 11.5810811,21.9080484 L11.4700011,21.8479983 L6.75348416,18.9001752 C4.50674338,17.4959623 2.9973732,15.1763947 2.61733718,12.5646862 L2.57852101,12.2620742 L2.00611627,7.11043153 C1.96237547,6.71676437 2.15492555,6.3385415 2.48944458,6.14011287 L2.59396504,6.08614246 L11.593965,2.08736316 Z M12,4.09548316 L4.074684,7.61677088 L4.56628848,12.0412112 C4.79233189,14.0756019 5.89660391,15.904196 7.58032075,17.0519337 L7.81348204,17.2041786 L12,19.8207524 L16.186518,17.2041786 C17.9222943,16.1193184 19.0922069,14.3320083 19.3974719,12.3173079 L19.4337115,12.0412112 L19.925316,7.61677088 L12,4.09548316 Z M14.2136429,8.38221966 C14.5548556,7.94794959 15.1835091,7.87251128 15.6177798,8.21372347 C16.018645,8.52868858 16.1137597,9.0885733 15.8576477,9.51441088 L15.7862762,9.61785831 L11.7862996,14.6178079 C11.4423592,15.0555496 10.8149977,15.1228552 10.3877107,14.7908187 L10.2928777,14.7070928 L8.2928926,12.707118 C7.90236913,12.3165951 7.90236913,11.6834324 8.2928926,11.2929096 C8.65337579,10.9324269 9.22060564,10.9046975 9.61289601,11.2097213 L9.70710315,11.2929096 L10.9100574,12.4958547 L14.2136429,8.38221966 Z"></path> </g></svg>
                        <p className='text-sm w-fit mt-2 font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>Credibility 10</p>
                    </li>
                    <li className="flex flex-col m items-center justify-between">
                        <svg width="35px" height="35px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM5 4C4.44772 4 4 4.44772 4 5V10H20V5C20 4.44772 19.5523 4 19 4H5ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM14 13C14.2652 13 14.5196 13.1054 14.7071 13.2929L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L14 15.4142L11.7071 17.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L9.58579 17L9 16.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L8.29289 14.2929C8.48043 14.1054 8.73478 14 9 14C9.26522 14 9.51957 14.1054 9.70711 14.2929L11 15.5858L13.2929 13.2929C13.4804 13.1054 13.7348 13 14 13ZM11 7C11 6.44772 11.4477 6 12 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H12C11.4477 8 11 7.55228 11 7ZM7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" fill="#7DD3FC"></path> </g></svg>
                        <p className='text-sm w-fit mt-2 font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>Posts 10</p>
                    </li>
                </ul>
                <div className="p-4 border-t mx-8 mt-2 flex flex-row justify-center">
                    <p className='text-md px-5 mx-2 w-fit m-auto font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>Follow</p>
                    <p className='text-md px-5 mx-2 w-fit font-bold text-white bg-[#7DD3FC] p-1 shadow-sm rounded-lg'>Redeam points</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;