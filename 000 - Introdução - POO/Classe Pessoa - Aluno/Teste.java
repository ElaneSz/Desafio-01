class Pessoa {
    public String nome;
    public int idade;
}

class Aluno extends Pessoa{
    public String mattricula;

    public Aluno() {
        System.out.println("!!!");
    }
}

public class Teste {
    public static void main(String[] args){
        Aluno aluno1 = new Aluno(); //Criação de novo aluno - da classe Aluno
        aluno1.nome = "Elane";
        aluno1.idade = 16;
        aluno1.mattricula = "98878668";

        System.out.println ("Nome: "+ aluno1.nome);
        System.out.println ("Idade: "+ aluno1.idade);
        System.out.println ("Matricula: "+ aluno1.mattricula);
    }
}
