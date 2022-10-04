import { Commentaries, CreateJS, JsCode, Numbers, ObjectField } from "../../../components/default-code";
import React, { FC, Fragment } from "react";
import { DefaultCode, DefaultText, DefaultTitle } from "../../../components";
import DefaultList from "../../../components/default-list";

export type codeItemContent = Array<{
  id: number | string,
  codeItem: React.ReactNode,
  className: string
}>
export type listItemContent = Array<{
  id: number | string,
  listItem: React.ReactNode
}>

export type courseJsContentGeneratorProps = {
  field: {
    id: string
    page: Array<{
      id: number | string,
      title?: React.ReactNode
      text?: React.ReactNode
      code?: {
        content: codeItemContent,
        clipboard?: string
      }
      list?: {
        content: listItemContent
        unordered?: boolean
        ordered?: boolean
      }
    }>
  }
}

export const CourseJsContentGenerator: FC<courseJsContentGeneratorProps> = ({ field }) => {
  return (
    <>
      {field.page.map(fieldItem => (
        <Fragment key={fieldItem.id}>
          {fieldItem.title && <DefaultTitle>{fieldItem.title}</DefaultTitle>}
          {fieldItem.text && <DefaultText>{fieldItem.text}</DefaultText>}
          {fieldItem.code && fieldItem.code.content &&
            <DefaultCode
              clipboard={fieldItem.code.clipboard ? fieldItem.code.clipboard : ''}
              codeContent={fieldItem.code.content}
            />
          }
          {fieldItem.list?.content && fieldItem.list.content !== [] &&
            <DefaultList
              list={fieldItem.list.content}
              type={fieldItem.list.unordered ? 'unordered' : fieldItem.list.ordered ? 'ordered' : 'error-type'}
            />
          }
        </Fragment>
      ))}
    </>
  )
}

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
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <JsCode>Object</JsCode>.<ObjectField>prototype</ObjectField>.sayHello
                = <CreateJS>function</CreateJS> () {'\{'}
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Hello!"</Commentaries>)
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                {'\}'}
              </>,
              className: 'code-row'
            },
          ],
          clipboard: 'Object.prototype.sayHello = function () {\n' +
            'console.log("Hello!")\n' +
            '}'
        },
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
        text: <>
          <div>This - arata la obiectul curent.</div>
          <div>Se foloseste (forma generala):</div>
        </>
      },
      {
        id: 4,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <CreateJS>function</CreateJS>.<ObjectField>bind</ObjectField> / <ObjectField>call</ObjectField> / <ObjectField>apply</ObjectField> (newBind)
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: 5,
        title: <h5>Methods</h5>
      },
      {
        id: 6,
        list: {
          content: [
            {
              id: 1,
              listItem: <><b>Bind</b> - returneaza o nou functie cu care schimba obiectul din parametru, cu obiectul
                current. Cu alte cuvinte, leaga obiectul din parametru dat pentru {'->'} (this) facandul parinte.
              </>
            },
            {
              id: 2,
              listItem: <><b>Call</b> - lucreaza echivalent ca Bind, doar ca apeleaza functia creata. Nu o
                returneaza!
              </>
            },
            {
              id: 3,
              listItem: <><b>Apply</b> - lucreaza echivalent ca Bind + Call, doar ca:
                <div>1 parametru - obiectul folosit</div>
                <div>2 parametru - un massiv cu parametrii functiei (daca are parametri)</div>
              </>
            },
            {
              id: 4,
              listItem: <><b>Console.Group</b> - grupeaza datele si le afiseaza in consola. Pentru a incheia group-ul se
                foloseste functia
                console.groupEnd()
              </>
            }
          ],
          unordered: true
        },
      },
      {
        id: 'context_examples',
        title: <h5>Examples:</h5>
      },
      {
        id: 'context_examples',
        text: <>Create a simple function:</>
      },
      {
        id: 'context_examples_simple_function',
        code: {
          content: [
            {
              id: 1,
              codeItem: <><CreateJS>function</CreateJS> <JsCode>hello</JsCode>() {'{'}</>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Hello\n"</Commentaries>, <JsCode>this</JsCode>)</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>{'}'}</>,
              className: 'code-row'
            },
          ],
          clipboard: 'function hello() {\n' +
            '  console.log(\'Hello\\n\', this)\n' +
            '}'
        }
      },
      {
        id: 'context_examples_text',
        text: <>Using this into object:</>
      },
      {
        id: 9,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <CreateJS>const</CreateJS> <ObjectField>person</ObjectField> = {'{'}
              </>,
              className: 'code-row'

              //   name: 'Vladilen',
              //   age: 25,
              //   sayHello: hello,
              //   sayHelloWindow: hello.bind(document),
              //   logInfo: function (job, phone) {
              //   console.group(`${this.name} info`)
              //   console.log(`Name is ${this.name}`)
              //   console.log(`Have ${this.age} age`)
              //   console.log(`Job is ${job}`)
              //   console.log(`Phone is ${phone}`)
              //   console.groupEnd()
              // {'}'}
            },
            {
              id: 2,
              codeItem: <>
                <ObjectField>name</ObjectField>: <Commentaries>'Vladilen'</Commentaries><CreateJS>,</CreateJS></>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <><ObjectField>age</ObjectField>: <Numbers>25</Numbers><CreateJS>,</CreateJS></>,
              className: 'code-row code-row-2space'
            },
            {
              id: 4,
              codeItem: <><ObjectField>sayHello</ObjectField>: <JsCode>hello</JsCode><CreateJS>,</CreateJS></>,
              className: 'code-row code-row-2space'
            },
            {
              id: 5,
              codeItem: <><ObjectField>sayHelloWindow</ObjectField>: <JsCode>hello</JsCode>.<JsCode>bind</JsCode>(<ObjectField mode={'italic'}>document</ObjectField>)</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 6,
              codeItem: <><JsCode>logInfo</JsCode>: <CreateJS>function</CreateJS> (job<CreateJS>,</CreateJS> phone) {'{'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 7,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>group</JsCode>(<Commentaries>`</Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'} <Commentaries>info`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 8,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Name is </Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'})</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 9,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Have `</Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'} <Commentaries>age`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 10,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Job is `</Commentaries>{'${job}'}<Commentaries>`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 11,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Phone is `</Commentaries>{'${phone}'}<Commentaries>`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 11,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>groupEnd</JsCode>()</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 12,
              codeItem: <>{'}'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 13,
              codeItem: <>{'}'}</>,
              className: 'code-row'
            },
          ],
          clipboard: 'const person = {\n' +
            '  name: \'Vladilen\',\n' +
            '  age: 25,\n' +
            '  sayHello: hello,\n' +
            '  sayHelloWindow: hello.bind(document),\n' +
            '  logInfo: function (job, phone) {\n' +
            '    console.group(`${this.name} info`)\n' +
            '    console.log(`Name is ${this.name}`)\n' +
            '    console.log(`Have ${this.age} age`)\n' +
            '    console.log(`Job is ${job}`)\n' +
            '    console.log(`Phone is ${phone}`)\n' +
            '    console.groupEnd()\n' +
            '  }\n' +
            '}'
        },
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
    ]
  }
}
