import { Point } from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    points: Point[];

    abstract getType(): string;

    constructor(points: Point[], color = 'green', filled = true) {
        if (points.length < 3) throw ('');
        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    toString(): string {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: (${this.points[0].x}, ${this.points[0].y}), (${this.points[1].x}, ${this.points[1].y}), (${this.points[2].x}, ${this.points[2].y}).`
    }

    getPerimeter(): number {
        const s1 = this.points[0].distance(this.points[1].x, this.points[1].y);
        const s2 = this.points[1].distance(this.points[2].x, this.points[2].y);
        const s3 = this.points[2].distance(this.points[0].x, this.points[0].y);

        return s1 + s2 + s3;
    }
}
