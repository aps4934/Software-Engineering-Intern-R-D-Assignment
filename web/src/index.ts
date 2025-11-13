interface FrameData {
    image: string; // base64 encoded image
    fps: number;
    resolution: string;
}

class FrameViewer {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private fpsDisplay: HTMLElement;
    private resolutionDisplay: HTMLElement;

    constructor() {
        this.canvas = document.getElementById('frameCanvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.fpsDisplay = document.getElementById('fpsDisplay')!;
        this.resolutionDisplay = document.getElementById('resolutionDisplay')!;

        this.init();
    }

    private init(): void {
        // Load a sample processed frame (in a real scenario, this would come from the Android app)
        this.loadSampleFrame();
    }

    private loadSampleFrame(): void {
        // This is a placeholder. In a real implementation, you'd receive data via WebSocket or HTTP
        const sampleData: FrameData = {
            image: this.getSampleBase64Image(),
            fps: 15.5,
            resolution: "640x480"
        };

        this.displayFrame(sampleData);
    }

    private displayFrame(data: FrameData): void {
        const img = new Image();
        img.onload = () => {
            this.canvas.width = img.width;
            this.canvas.height = img.height;
            this.ctx.drawImage(img, 0, 0);
        };
        img.src = `data:image/png;base64,${data.image}`;

        this.fpsDisplay.textContent = `FPS: ${data.fps.toFixed(1)}`;
        this.resolutionDisplay.textContent = `Resolution: ${data.resolution}`;
    }

    private getSampleBase64Image(): string {
        // Placeholder base64 string for a sample edge-detected image
        // In practice, this would be generated from the Android app
        // Using a larger sample image for demo
        return "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
    }
}

// Initialize the viewer when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FrameViewer();
});
