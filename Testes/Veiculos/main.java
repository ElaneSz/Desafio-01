package aula01;

public class Aula01 {

    public static void main(String[] args) {
        Veiculos minivan = new Veiculos (7,80,9);
        Veiculos sportcar = new Veiculos (2,9,35);
        System.out.print("Minivan pode transportar"+minivan.get_passageiros()+" passageiros");
        System.out.println("com uma autonomia de "+minivan.calcular_consumo()+" quilômetros");
        System.out.print("Carro esporte pode transportar "+sportcar.get_passageiros()+" passageiros");
        System.out.println("com uma autonomia de "+sportcar.calcular_consumo()+" quilômetros");
    }
}
