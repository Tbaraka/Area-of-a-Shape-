import java.util.Scanner;

public class ShapeAreaCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose a shape (circle, rectangle, triangle):");
        String shape = scanner.nextLine().toLowerCase();

        double area = 0;

        switch (shape) {
            case "circle":
                System.out.println("Enter the radius:");
                double radius = scanner.nextDouble();
                area = Math.PI * radius * radius;
                break;

            case "rectangle":
                System.out.println("Enter the length:");
                double length = scanner.nextDouble();
                System.out.println("Enter the width:");
                double width = scanner.nextDouble();
                area = length * width;
                break;

            case "triangle":
                System.out.println("Enter the base:");
                double base = scanner.nextDouble();
                System.out.println("Enter the height:");
                double height = scanner.nextDouble();
                area = 0.5 * base * height;
                break;

            default:
                System.out.println("Invalid shape selected.");
                System.exit(1);
        }

        System.out.println("The area of the " + shape + " is: " + area);
        scanner.close();
    }
}
