export interface Social {
    name: string;
    link: string;
}

export interface Tool {
    name: string;
    link: string;
}

export interface Media {
    name: string;
    link: string;
}

export interface Localhost {
    name: string;
    link: string;
}

export interface Favourites {
    name: string;
    link: string;
}

export interface Data {
    socials: Social[];
    tools: Tool[];
    media: Media[];
    localhosts: Localhost[];
    favourites: Favourites[];
}
