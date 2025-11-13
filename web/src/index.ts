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
        // For demo, draw a simple edge-detected pattern instead of loading image
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, 640, 480);
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 2;
        // Draw some lines to simulate edges
        this.ctx.beginPath();
        this.ctx.moveTo(100, 100);
        this.ctx.lineTo(200, 200);
        this.ctx.moveTo(300, 100);
        this.ctx.lineTo(400, 200);
        this.ctx.stroke();

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
