import { Commentaries, JsCode, ObjectField } from "../../../components/default-code";

export const getCourseJSContent = {
  prototype: {
    id: 'prototype',
    page: [
      {
        id: 1,
        title: <>
          Prototype
        </>
      },
      {
        id: 2,
        text: <>
          <div>Permite sa adaugi in obiectele globale a browser-ului, obiectele proprii.</div>
          <div>Cu alte cuvinte, un obiect care poate exista la alte obiecte.</div>
        </>
      },
      {
        id: 3,
        code: <>
          <div className={'code-row'}>
            <JsCode>Object</JsCode>.<ObjectField>prototype</ObjectField>.sayHello = <JsCode>function</JsCode> () {'\{'}
          </div>
          <div className={'code-row code-row-2space'}>
            <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Hello!"</Commentaries>)
          </div>
          <div className={'code-row'}>
            {'\}'}
          </div>
        </>,
        clipboard: 'Object.prototype.sayHello = function () {\n' +
          'console.log("Hello!")\n' +
          '}'
      },
    ]
  },
  context: {
    id: 'context',
    page: [
      {
        id: 1,
        title: <>Context</>
      },
      {
        id: 2,
        text: <>This - arata la obiectul curent.</>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  closures: {
    id: 'closures',
    page: [
      {
        id: 1,
        title: <>Closures</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  async: {
    id: 'async',
    page: [

      {
        id: 1,
        title: <>Async</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  promise: {
    id: 'promise',
    page: [

      {
        id: 1,
        title: <>Promise</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  objects: {
    id: 'objects',
    page: [

      {
        id: 1,
        title: <>Objects</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  classes: {
    id: 'classes',
    page: [

      {
        id: 1,
        title: <>Classes</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  asyncAwait: {
    id: 'asyncAwait',
    page: [

      {
        id: 1,
        title: <>AsyncAwait</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  proxy: {
    id: 'proxy',
    page: [

      {
        id: 1,
        title: <>Proxy</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  generators: {
    id: 'generators',
    page: [

      {
        id: 1,
        title: <>Generators</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  },
  arrays: {
    id: 'arrays',
    page: [

      {
        id: 1,
        title: <>Arrays</>
      },
      {
        id: 2,
        text: <></>
      },
      {
        id: 3,
        code: <></>
      },
    ]
  }
}
