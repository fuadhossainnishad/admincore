export interface IStats {
    total_users: {
        value: number;
        change: number;
    };
    active_subscriptions: {
        value: number;
        change: number;
    };
    stories_created: {
        value: number;
        change: number;
    };
    reported_content: {
        value: number;
        change: number;
    };
}

export interface IRecentSignup {
    id: string;
    name: string;
    email: string;
    date: string;
    plan: string;
    profile_picture_url: string
}

export interface IRecentStory {
    id: string;
    title: string;
    creator: string;
    date: string;
    status: "Published" | "Pending";
}

export interface IDashboardResponse {
    success: boolean;
    code: number;
    message: string;
    timestamp: number;
    data: {
        stats: IStats;
        recent_signups: IRecentSignup[];
        recent_stories: IRecentStory[];
    };
}
