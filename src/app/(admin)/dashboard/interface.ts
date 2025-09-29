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
    _id: string;
    name: string;
    Email: string;
    Date: string;
    Plan: "free" | "premium" | "trial";
}

export interface IRecentStory {
    _id: string;
    Title: string;
    Creator: string;
    Date: string;
    Status: "Published" | "Pending";
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
