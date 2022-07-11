import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        super([point1, point2, point3], color, filled);
    }
    
    getType(): string {
        const p1 = this.points[0];
        const p2 = this.points[1];
        const p3 = this.points[2];

        const s1 = Math.round(p1.distance(p2.x, p2.y) * 100) / 100;
        const s2 = Math.round(p2.distance(p3.x, p3.y) * 100) / 100;
        const s3 = Math.round(p3.distance(p1.x, p1.y) * 100) / 100;

        if (s1 === s2 && s2 === s3) {
            return 'equilateral triangle';
        } else if ((s1 === s2 && s2 != s3) || (s1 == s3 && s2 != s3) || (s2 === s3 && s1 != s2)) {
            return 'isosceles triangle';
        } else if (s1 != s2 && s2 != s3) {
            return 'scalene triangle';
        }
        return '';
    }

    toString(): string {
        return `Triangle[v1=(${this.points[0].x}, ${this.points[0].y}),v2=(${this.points[1].x}, ${this.points[1].y}),v3=(${this.points[2].x}, ${this.points[2].y})]`
    }
}
