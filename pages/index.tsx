import type { NextPage } from "next";
import { useState, useEffect } from "react";
import sidebarOptions from "../config/sidebarOptions";

import { userService } from "../services";

const Home: NextPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(userService.userValue);
    }, []);

    return (
        <div>
            {sidebarOptions &&
                sidebarOptions.map((option, index) => (
                    <div key={index}>
                        <p>
                            {option.title}
                            {option.icon}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default Home;
