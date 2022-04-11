/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 05:58:00 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

function Bottom() {
    return (
        <div className="w-full px-2 py-1 mt-2 bg-white rounded-md flex items-center">
            <div className="relative w-16 h-16 flex justify-center items-center p-2">
                {/* <Image
                className="absolute rounded-full"
                src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
                layout="fill"
                loading="lazy"
                objectFit="contain" 
                /> */}
                <img
                    className="object-contain"
                    src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
                    alt="profile picture"
                />
            </div>
            <div>
                {/* name */}
                <p className="font-roboto font-medium">
                    {/* don't render full name, instead trim it */}
                    chandan k.
                </p>
                {/* email */}
                <p className="font-nunito italic text-gray-500 text-sm">
                    chankruze@gmail.com
                </p>
            </div>
        </div>
    );
}

export default Bottom;
