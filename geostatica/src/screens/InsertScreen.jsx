import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export function InsertScreen() {
  const [layers, setLayers] = useState(0);
  const [level, setLevel] = useState(0);
  const [colectedData, setColectedData] = useState({});

  useEffect(() => {
    setColectedData({ layers, level });
    console.log(colectedData);
  }, [layers, level]);

  return (
    <section>
      <Form>
        <fieldset>
          <Form.Group className="mx-2 mb-3">
            <label>
              <b>Nível do lençol freático: </b>
            </label>
            <input
              value={level}
              onChange={(level) => {
                setLevel(level.target.value);
              }}
              className="form-control"
              type="number"
            />
          </Form.Group>
          <Form.Group className="mx-2 mb-3">
            <label>
              <b>Informe o número de camadas: </b>
            </label>
            <input
              className="form-control"
              type="number"
              value={layers}
              onChange={(layers) => {
                setLayers(layers.target.value);
              }}
            />
          </Form.Group>
          <div className="text-center">
            <Link to={`/amostras/${colectedData.level}/${colectedData.layers}`}>
              <Button variant="primary">Adicionar novos dados</Button>
            </Link>
          </div>
        </fieldset>
      </Form>
    </section>
  );
}
