package aula01;

public class Moto extends Veiculos{
    private String marca;
    
    public Moto(int pass, int comb, int cons, String mar){
        super(pass, comb, cons);
        this.marca = mar;   
    }
    public String getMarca(){
        return this.marca;
    }
}
