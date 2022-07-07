package aula01;

public class Aula01 {

    public static void main(String[] args) {
        Veiculos minivan = new Veiculos (7,80,9);
        Veiculos sportcar = new Veiculos (2,9,35);
        Moto moto = new Moto (2,10,20,"honda");
        System.out.print("Minivan pode transportar"+minivan.get_passageiros()+" passageiros");
        System.out.println("com uma autonomia de "+minivan.calcular_consumo()+" quilômetros");
        System.out.println("=============================================================");
        System.out.print("Carro esporte pode transportar "+sportcar.get_passageiros()+" passageiros");
        System.out.println("com uma autonomia de "+sportcar.calcular_consumo()+" quilômetros");
        System.out.println("=============================================================");
        System.out.print("Moto " + moto.getMarca() + " pode transportar " + moto.get_passageiros() + " passageiros ");
        System.out.println("com uma autonomia de " + moto.calcular_consumo() + " quilômetros");
    }
}
