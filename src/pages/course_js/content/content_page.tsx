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
              listItem: <><b><ObjectField>Bind</ObjectField></b> - returneaza o noua functie cu care schimba obiectul
                din parametru, cu obiectul
                current. Cu alte cuvinte, leaga obiectul din parametru dat pentru {'->'} (this) facandul parinte.
              </>
            },
            {
              id: 2,
              listItem: <><b><ObjectField>Call</ObjectField></b> - lucreaza echivalent ca Bind, doar ca apeleaza functia
                creata. Nu o
                returneaza!
              </>
            },
            {
              id: 3,
              listItem: <><b><ObjectField>Apply</ObjectField></b> - lucreaza echivalent ca Bind + Call, doar ca:
                <div>1 parametru - obiectul folosit</div>
                <div>2 parametru - un massiv cu parametrii functiei (daca are parametri)</div>
              </>
            },
            {
              id: 4,
              listItem: <><b><ObjectField>Console</ObjectField>.<ObjectField>Group</ObjectField></b> - grupeaza datele
                si le afiseaza in consola. Pentru a incheia group-ul se
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
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Hello\n"</Commentaries>, <JsCode>this</JsCode>)</>,
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
              codeItem: <>
                <ObjectField>sayHelloWindow</ObjectField>: <JsCode>hello</JsCode>.<JsCode>bind</JsCode>(<ObjectField
                mode={'italic'}>document</ObjectField>)</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 6,
              codeItem: <>
                <JsCode>logInfo</JsCode>: <CreateJS>function</CreateJS> (job<CreateJS>,</CreateJS> phone) {'{'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 7,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>group</JsCode>(<Commentaries>`</Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'}
                <Commentaries>info`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 8,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Name
                is </Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'})</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 9,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Have
                `</Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'}
                <Commentaries>age`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 10,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Job is
                `</Commentaries>{'${job}'}<Commentaries>`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: 11,
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Phone is
                `</Commentaries>{'${phone}'}<Commentaries>`</Commentaries>)</>,
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
        id: 'closures_info',
        text: <><b>Closure (închidere)</b> - combinația unei funcții grupate împreună (închisă) cu referințe la starea
          ei înconjurătoare (mediul lexical). Cu alte cuvinte, o închidere vă oferă acces la domeniul de aplicare al
          unei funcții exterioare dintr-o funcție internă. În JavaScript, închiderile sunt create de fiecare dată când
          este creată o funcție, la momentul creării funcției. O mai putem numi, o functie in functie.</>
      },
      {
        id: 2,
        text: <>Structura generala:</>
      },
      {
        id: 3,
        code: {
          content: [
            {
              id: 1,
              codeItem: <><CreateJS>function</CreateJS> <JsCode>urlGenerator</JsCode>(domain) {'{'}</>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <><CreateJS>return</CreateJS> <CreateJS>function</CreateJS> (url) {'{'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <><CreateJS>return </CreateJS>
                <Commentaries>`https//</Commentaries>{'${url}'}<Commentaries>.</Commentaries>{'${domain}'}<Commentaries>`</Commentaries></>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>{'}'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 5,
              codeItem: <>{'}'}</>,
              className: 'code-row'
            },
          ],
          clipboard: 'function urlGenerator(domain) {\n' +
            '  return function (url) {\n' +
            '    return `https//${url}.${domain}`\n' +
            '  }\n' +
            '}'
        }
      },
      {
        id: 4,
        text: <>Se foloseste:</>
      },
      {
        id: 5,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <CreateJS>const</CreateJS>&nbsp;
                <ObjectField>comUrl</ObjectField> = <JsCode>urlGenerator</JsCode>(<Commentaries>"com"</Commentaries>)
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <CreateJS>const</CreateJS>&nbsp;
                <ObjectField>ruUrl</ObjectField> = <JsCode>urlGenerator</JsCode>(<Commentaries>"ru"</Commentaries>)
              </>,
              className: 'code-row'
            },
          ],
          clipboard: 'constcomUrl = urlGenerator("com")\n' +
            'construUrl = urlGenerator("ru")'
        }
      },
      {
        id: 6,
        text: <>Rezultat:</>
      },
      {
        id: 7,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>https//google.com</>,
              className: 'code-row'
            }
          ]
        }
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
        text: <>Sunt metodele/procedeele apelate in mod async (in <b>Web Api</b>), nu in <b>Call Stack</b></>
      },
      {
        id: 3,
        text: <>Documentatia: <a href="http://latentflip.com/"
                                 className={'my-workspace-link'}>http://latentflip.com/</a></>
      },
      {
        id: 4,
        text: <h5>Methods:</h5>
      },
      {
        id: 5,
        text: <>Metodele principale - <JsCode>setTimeout</JsCode>()</>
      },
      {
        id: 5,
        text: <h5>Examples:</h5>
      },
      {
        id: 7,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <CreateJS>async</CreateJS> <CreateJS>function</CreateJS> <JsCode>getDataAPI</JsCode>() {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <><CreateJS>try</CreateJS> {'{'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Starting..."</Commentaries>)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>
                <CreateJS>await</CreateJS>.<JsCode>delay</JsCode>(<Numbers>2000</Numbers>)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 5,
              codeItem: <>
                <Commentaries>// Get data using fetch</Commentaries>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 6,
              codeItem: <>
                <CreateJS>const</CreateJS> data = <CreateJS>await</CreateJS> <JsCode>fetch</JsCode>(<ObjectField
                mode={'italic'}>jsonURL</ObjectField>)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 7,
              codeItem: <>
                <Commentaries>// Convert into json format</Commentaries>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 8,
              codeItem: <>
                <CreateJS>const</CreateJS> jsonData = <CreateJS>await</CreateJS> data.<JsCode>json</JsCode>()
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 9,
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Data:
                "</Commentaries><CreateJS>,</CreateJS> jsonData)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 10,
              codeItem: <>
                {'}'} <CreateJS>catch</CreateJS> (e) {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 11,
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(e)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 12,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 13,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row'
            },
          ],
          clipboard: 'async function getDataAPI() {\n' +
            '  try {\n' +
            '    console.log(\'Starting...\')\n' +
            '    await delay(2000)\n' +
            '    // Get data using fetch\n' +
            '    const data = await fetch(jsonURL)\n' +
            '    // Convert into json format\n' +
            '    const jsonData = await data.json()\n' +
            '    console.log(\'Data: \', jsonData)\n' +
            '  } catch (e) {\n' +
            '    console.log(e)\n' +
            '  }\n' +
            '}'
        }
      }
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
        text: <>
          <b>Promise</b> - sunt create pentru a usura lucrul operatiilor asinchrone. Nu se creeaza callback-uri
          inauntrul callback-urilor, de aceea se foloseste doar un metod "then"
        </>
      },
      {
        id: 3,
        list: {
          content: [
            {
              id: 1,
              listItem: <>
                <b><CreateJS>new</CreateJS>
                  <JsCode>Promise</JsCode>((<ObjectField>resolve</ObjectField><CreateJS>,</CreateJS>
                  <ObjectField>reject</ObjectField>) {'=>'} {'{'}<Commentaries>content</Commentaries>{'}'})</b> -
                promise reprezintă un class in interiorul căruia trebuie de creat un callback
              </>
            },
            {
              id: 2,
              listItem: <>
                <b><ObjectField>resolve</ObjectField></b> - se apeleaza atunci cand dorim sa se termine operatia
                asinchrona cu status 'Success'
              </>
            },
            {
              id: 3,
              listItem: <>
                <b><ObjectField>reject</ObjectField></b> - se apeleaza atunci cand dorim sa se termine operatia
                asinchrona cu status 'Error'
              </>
            },
            {
              id: 4,
              listItem: <>
                <b>.<JsCode>then</JsCode></b> - dupa ce sa indeplinit promise-ul(cu success) poate fi apelat (de mai
                multe ori) si de realizat logica.
              </>
            },
            {
              id: 5,
              listItem: <>
                <b>.<JsCode>cache</JsCode></b> - dupa ce sa indeplinit promise-ul si are status 'Error', se indeplineste
                acest metod. Se foloseste ca ultima operatie a promise-ului (o apelam la sfarsit)
              </>
            },
            {
              id: 6,
              listItem: <>
                <b>.<JsCode>finally</JsCode></b> - se indeplineste o singura data, indiferent de ce status vine error
                sau success, nu primeste parametri
              </>
            },
          ],
          unordered: true
        },
      },
      {
        id: 4,
        list: {
          content: [
            {
              id: 1,
              listItem: <>
                <b><JsCode>Promise</JsCode>.<ObjectField>all</ObjectField></b> - primeste un massiv din promise-uri se
                indeplineste atunci cand se indeplineste primul promise
              </>
            },
            {
              id: 2,
              listItem: <>
                <b><JsCode>Promise</JsCode>.<ObjectField>race</ObjectField></b> - returnează un promise care se
                îndeplinește sau respinge
              </>
            }
          ],
          unordered: true,
        }
      }
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
        text: <>
          <b><ObjectField>Object</ObjectField>.<JsCode>create</JsCode></b> - creeaza un obiect cu ajutorul obiectului
          global <b>"Object"</b>
        </>
      },
      {
        id: 3,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <ObjectField>Object</ObjectField>.<JsCode>create</JsCode>({'{'}<ObjectField>prototypeForFunctions</ObjectField>{'}'}<CreateJS>,</CreateJS> {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <ObjectField>value</ObjectField>: value
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 5,
              codeItem: <>
                {'})'}
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: 4,
        text: <>
          <b>Enumerable</b> - permite ca câmpul curent sa fie enumerat in cicluri.
        </>
      },
      {
        id: 5,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <ObjectField>value</ObjectField>: value,
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>
                <ObjectField>enumerable</ObjectField>: <CreateJS>true</CreateJS>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 5,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 6,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: 6,
        text: <>
          <b>Writable</b> - permite ca câmpul curent sa poata fi rescris.
        </>
      },
      {
        id: 7,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <ObjectField>value</ObjectField>: value,
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>
                <ObjectField>writable</ObjectField>: <CreateJS>true</CreateJS>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 5,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 6,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: 8,
        text: <>
          <b>Configurable</b> - permite sa putem sterge orice cheie din câmpul curent.
        </>
      },
      {
        id: 9,
        text: <>
          <b><CreateJS>!!!</CreateJS></b> Pentru a sterge o cheie putem folosi operatorul <CreateJS>delete</CreateJS>.
        </>
      },
      {
        id: 10,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <ObjectField>value</ObjectField>: value,
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>
                <ObjectField>configurable</ObjectField>: <CreateJS>true</CreateJS>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 5,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 6,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: 7,
              codeItem: <>

              </>,
              className: 'code-row'
            },
            {
              id: 8,
              codeItem: <>
                <CreateJS>delete</CreateJS> <ObjectField>object</ObjectField>.<ObjectField>key</ObjectField>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: 11,
        text: <>
          <b>Getter</b> - returneaza o noua valoare
        </>
      },
      {
        id: 12,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <JsCode>get</JsCode>() {'{'}
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>
                <CreateJS>return</CreateJS> value
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 5,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 6,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: 13,
        text: <>
          <b>Setter</b> - seteaza o noua valoare
        </>
      },
      {
        id: 14,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <JsCode>set</JsCode>(value) {'{'}
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(value)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 5,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 6,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: 7,
              codeItem: <>

              </>,
              className: 'code-row'
            },
            {
              id: 8,
              codeItem: <>
                <CreateJS>delete</CreateJS> <ObjectField>object</ObjectField>.<ObjectField>key</ObjectField>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: 15,
        text: <>
          Class-ul Object are un prototip care permite sa salveze toate metodele obiectului "prototypeForFunctions"
        </>
      },
      {
        id: 16,
        text: <>
          Ciclul <b>for {'->'} in</b> trece si prin prototipurile Obiectului (prototipurile se mostenesc, de accea in
          toate prototipurile), de aceea pentru a trece doar prin Obiect (fara prototip - metodele ajutatoare a
          Obiectului) punem conditia:
        </>
      },
      {
        id: 17,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <CreateJS>for</CreateJS> ( <CreateJS>let</CreateJS> key <CreateJS>in</CreateJS>
                <ObjectField>object</ObjectField> ) {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <Commentaries>// Daca key se contine in object</Commentaries>
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <CreateJS>if</CreateJS> ( <ObjectField>object</ObjectField>.<JsCode>hasOwnProperty</JsCode>(key)) {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 4,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 5,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 6,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row'
            },
          ]
        }
      },
    ]
  },
  classes: {
    id: 'classes',
    page: [
      {
        id: 'structure_class',
        title: <>Classes</>,
        text: <>
          Structura class-ului:
        </>,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <CreateJS>class</CreateJS> <JsCode>className</JsCode> {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: 2,
              codeItem: <>
                <JsCode>constructor</JsCode> ( options ) {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 3,
              codeItem: <>
                <CreateJS>this</CreateJS>.<ObjectField>name</ObjectField> = options.<ObjectField>name</ObjectField>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 4,
              codeItem: <>
                <CreateJS>this</CreateJS>.<ObjectField>age</ObjectField> = options.<ObjectField>age</ObjectField>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 5,
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: 6,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 7,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row'
            },
          ],
          clipboard: 'class className {\n' +
            '  constructor(options) {\n' +
            '    this.name = options.name\n' +
            '    this.age = options.age\n' +
            '    ...\n' +
            '  }\n' +
            '}'
        }
      },
      {
        id: 'types_variables',
        title: <h5>Tipuri de variabile:</h5>,
        text: <><b>Static</b> - variabila data poate fi schimbata doar din interiorul class-ului</>,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <b><CreateJS>type</CreateJS> <ObjectField>variable</ObjectField></b>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: 5,
        text: <>Example:</>,
        code: {
          content: [
            {
              id: 1,
              codeItem: <>
                <CreateJS>static</CreateJS> <ObjectField>type</ObjectField> = <Commentaries>"something"</Commentaries>
              </>,
              className: 'code-row'
            }
          ]
        }
      },
      {
        id: 5,
        text: <>
          <div><b>Getter</b> - returneaza ceva</div>
        </>,
        code: {
          content: [
            {
              id: 12,
              codeItem: <>
                <ObjectField>get</ObjectField> <JsCode>thisGetter</JsCode>() {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: 13,
              codeItem: <>
                <CreateJS>return</CreateJS> variable
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 14,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row'
            },
          ],
          clipboard: 'get thisGetter() {\n' +
            '  return variable\n' +
            '}'
        }
      },
      {
        id: 6,
        text: <>
          <div><b>Setter</b> - seteaza ceva</div>
        </>,
        code: {
          content: [
            {
              id: 22,
              codeItem: <>
                <ObjectField>set</ObjectField> <JsCode>thisSetter</JsCode>(newValue) {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: 23,
              codeItem: <>
                <CreateJS>this</CreateJS>.<ObjectField>variable</ObjectField> = newValue
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: 24,
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row'
            },
          ],
          clipboard: 'set thisSetter(newValue) {\n' +
            '  this.variable = newValue\n' +
            '}'
        }
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
