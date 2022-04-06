import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export function Samples() {

  const materiais = [{nome: 'Argilas e Siltes Argilosos'},
                     {nome: 'Areias e Silte Arenosos'}]



  const params = useParams();
  const [material, setMaterial] = useState(
    Array(parseInt(params.layers)).fill(0)
  );
  const [hits, setHits] = useState(Array(parseInt(params.layers)).fill(1));
  const [pesoEspecifico, setPesoEspecifico] = useState(Array(parseInt(params.layers)).fill(1));

  useEffect(() => {

  }, [material]);


  function calcularPesoEspecifico(numeroDeGolpes, posicao) {
    if(material[posicao] === "Argilas e Siltes Argilosos") {

      // if(params.level > ) {

      // }else {

      // }

    }else if(material[posicao] === "Areias e Silte Arenosos") {

    }

  }

  return (
    <section>
      <Form>
        <fieldset>
          <Form.Group className="mx-2 mb-3">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Nível do lençol freático: </b>
                  </td>
                  <td>
                    <div className="mx-2 d-inline-block border border-dark text-center">
                      {params.level}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Número de Camadas:&nbsp;</b>
                  </td>
                  <td>
                    <div className="mx-2 d-inline-block border border-dark text-center">
                      {params.layers}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form.Group>

          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Amostra</th>
                <th>Tipo de Solo</th>
                <th>Número de golpes</th>
                <th>Peso específico</th>
              </tr>
            </thead>
            <tbody>
              {Array.apply(null, Array(parseInt(params.layers))).map(function (
                layer,
                index
              ) {
                return (
                  <tr key={index}>
                    <td>{index + 1 > 1 ? (index+1 + " metros" ) : (index+1 + " metro")}  </td>
                    <td>
                      <Form.Select>
                        <option style={{ display: "none" }} defaultValue>
                          Escolher
                        </option>
                        {materiais.map((option, index) => (
                        <option key={index} value={option.peso}>
                          {option.nome}
                        </option>
                        ))}
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control
                          value={hits[index]}
                          onChange={(hitsChanged) => {
                            if (
                              isNaN(parseInt(hitsChanged.target.value)) ||
                              parseInt(hitsChanged.target.value) === 0 ||
                              hitsChanged.target.value === ''
                            ) {
                              let newArray = [...hits];
                              newArray[index] = parseInt(1);
                              setHits([...newArray]);
                              return;
                            }
                            let newArray = [...hits];
                            newArray[index] = parseInt(
                              hitsChanged.target.value
                            );
                            setHits([...newArray]);
                            let newWeightArray = [...pesoEspecifico];
                            let valorPesoEspecifico = calcularPesoEspecifico(hitsChanged.target.value, index);
                          }}
                          type="number"
                        />
                      </Form.Group>
                    </td>
                    <td>
                         placeholder
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div className="text-center">
            <Link to={`/calculos/:`}>
              <Button variant="primary">Adicionar novos dados</Button>
            </Link>
          </div>
        </fieldset>
      </Form>
    </section>
  );
}
