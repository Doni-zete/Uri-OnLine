#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    string vendedor;
    double salario = 500, resultado, comissao = 0.15, VendatotalMes, total;
    cin >> vendedor;
    cin >> salario;
    cin >> VendatotalMes;

    double resul = VendatotalMes * comissao;
    cout << fixed << setprecision(2);
    total = (resul) + salario;
    cout << "TOTAL = R$ " << total << endl;

    return 0;
}