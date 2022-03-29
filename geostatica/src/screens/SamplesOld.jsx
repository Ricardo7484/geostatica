import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export function Samples() {

  const pesoEspecifico = {
    materiais: [{
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '0-2',
      peso: 13
    },
    {
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '3-5',
      peso: 15
    },
    {
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '6-10',
      peso: 17
    },
    {
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '11-19',
      peso: 19
    },
    {
      nome: 'Argilas e Siltes Argilosos',
      numeroDeGolpes: '20-inf',
      peso: 21
    },
    {
      nome: 'Areias e Silte Arenosos',
      numeroDeGolpes: '0-4',
      peso: 18
    },
    {
      nome: 'Areias e Silte Arenosos',
      numeroDeGolpes: '5-8',
      peso: 18
    },
    {
      nome: 'Areias e Silte Arenosos',
      numeroDeGolpes: '19-40',
      peso: 20
    },
    {
      nome: 'Areias e Silte Arenosos',
      numeroDeGolpes: '41-inf',
      peso: 20
    }]
  }

  const params = useParams();
  const [material, setMaterial] = useState(
    Array(parseInt(params.layers)).fill(0)
  );
  const [hits, setHits] = useState(Array(parseInt(params.layers)).fill(1));

  useEffect(() => {}, [material, hits]);

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
                <th>Golpes</th>
                <th>Material</th>
              </tr>
            </thead>
            <tbody>
              {Array.apply(null, Array(parseInt(params.layers))).map(function (
                layer,
                index
              ) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control
                          value={hits[index]}
                          onChange={(hitsChanged) => {
                            if (
                              isNaN(parseInt(hitsChanged.target.value)) ||
                              parseInt(hitsChanged.target.value) === 0
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
                          }}
                          type="number"
                        />
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Select
                        value={material[index]}
                        size="sm"
                        onChange={(materialSelected) => {
                          let newArray = [...material];
                          newArray[index] = parseInt(
                            materialSelected.target.value
                          );
                          setMaterial([...newArray]);
                        }}
                        aria-label="Default select example"
                      >
                        <option style={{ display: "none" }} defaultValue>
                          Escolher
                        </option>
                        <option value="1">Solo tipo 1</option>
                        <option value="2">Solo tipo 2</option>
                        <option value="3">Solo tipo 3</option>
                      </Form.Select>
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
