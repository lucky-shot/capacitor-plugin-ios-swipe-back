export interface IosSwipeBackPlugin {
    enable(options: {
        error: number;
    }): Promise<{
        error: number;
    }>;
    disable(options: {
        error: number;
    }): Promise<{
        error: number;
    }>;
}
