export interface posts{
    postid:number,
    posttitle:string,
    posturl:string,
    caption:string,
    userid:number
}

export interface users{
    userid: number
    firstname:string,
    middlename:string,
    lastname:string,
    email:string,
    gender:string,
    contact:string,
    password:string
}

export interface SocialMediaState{
    registerusers:Array<users>,
    posts:Array<posts>,
    activeuser?:users
}



