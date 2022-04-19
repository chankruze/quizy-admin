/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 15:41:44 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
