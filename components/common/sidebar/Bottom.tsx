/*
Author: chankruze (chankruze@gmail.com)
Created: Sun Apr 10 2022 05:58:00 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

interface Props {
    user: any;
}

const Bottom: React.FC<Props> = ({ user }) => {
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
                    className="object-contain rounded-full"
                    src={user.avatar}
                    alt="profile picture"
                />
            </div>
            <div>
                {/* name */}
                <p className="font-roboto font-medium">
                    {/* don't render full name, instead trim it */}
                    {user.name}
                </p>
                {/* email */}
                <p className="font-nunito italic text-gray-500 text-sm">
                    {user.email}
                </p>
            </div>
        </div>
    );
};

export default Bottom;
