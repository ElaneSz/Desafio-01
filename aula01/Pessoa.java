package atividade.pkg01.elane;

public class Pessoa {
    private String nome;
    private double peso, altura;
    private int idade;
    
    public Pessoa (String no, double pe, double al, int id){
        this.nome = no;
        this.peso = pe;
        this.altura = al;
        this.idade = id;
    }
    public String retornaNome (){
        return this.nome;
    }
    public int envelhecer (){
        id = id++;
        return this.idade;
    }
    public double engordar (){
        pe = pe++;
        return this.peso;
    }
    public double emagrecer (){
        pe = pe--;
        return this.peso;
    }
    public double crescer (){
        if (id < 21){
            al = al + 0.5;
            return this.altura;
        }
    }
}

/*==================================================================*/

Pessoa elane = new Pessoa (Elane,60.0,1.55,17);
    System.out.println("Olá " + elane.retornaNome());
    System.out.println("Você envelheceu 1 ano, com isso sua idade atual é:" + elane.envelhecer());
    System.out.println("Seu peso atual é:" + elane.engordar());
    System.out.println("Você emagreceu, portanto seu peso atual é: " + elane.emagrecer());
    System.out.println("Sua altura atual é: " + elane.crescer());