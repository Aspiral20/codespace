import { Commentaries, CreateJS, JsCode, Numbers, ObjectField } from "../../../../../components/default-code";
import React from "react";
import DefaultLink from "../../../../../components/default-link";
import {v4 as uuid} from 'uuid'

export const getJavaScriptContent = {
  java_script: {
    id: 'java_script',
    page: [
      {
        id: uuid(),
        title: <>
          JavaScript content:
        </>,
        list: {
          content: [
            {
              id: uuid(),
              listItem: <>
                Prototype:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=1"}
                  value={'https://www.youtube.com/watch?1'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Context (this):&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=UGapN-hrekw&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=2"}
                  value={'https://www.youtube.com/watch?2'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Closures:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=pahO5XjnfLA&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=3"}
                  value={'https://www.youtube.com/watch?3'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Async (setTimeout):&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=vIZs5tH-HGQ&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=4"}
                  value={'https://www.youtube.com/watch?4'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Promise:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=5"}
                  value={'https://www.youtube.com/watch?5'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Objects:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=cS6nTVNzOPw&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=6"}
                  value={'https://www.youtube.com/watch?6'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Classes:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=uLY9GXGMXaA&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=7"}
                  value={'https://www.youtube.com/watch?7'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                AsyncAwait:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=SHiUyM_fFME&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=8"}
                  value={'https://www.youtube.com/watch?8'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Proxy:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=np08WdS9OXg&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=9"}
                  value={'https://www.youtube.com/watch?9'}
                  target={"_blank"}
                />, &nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=np08WdS9OXg&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=10"}
                  value={'https://www.youtube.com/watch?10'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Generators:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=7wtbNNiOh30&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=11"}
                  value={'https://www.youtube.com/watch?11'}
                  target={"_blank"}
                />
              </>
            },
            {
              id: uuid(),
              listItem: <>
                Arrays:&nbsp;
                <DefaultLink
                  href={"https://www.youtube.com/watch?v=nEabP9CYCAQ&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=12"}
                  value={'https://www.youtube.com/watch?12'}
                  target={"_blank"}
                />
              </>
            },
          ],
          ordered: true
        },
      },
    ]
  },
  prototype: {
    id: 'prototype',
    page: [
      {
        id: uuid(),
        title: <>
          Prototype
        </>
      },
      {
        id: uuid(),
        text: <>
          <div>Permite sa adaugi in obiectele globale a browser-ului, obiectele proprii.</div>
          <div>Cu alte cuvinte, un obiect care poate exista la alte obiecte.</div>
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <JsCode>Object</JsCode>.<ObjectField>prototype</ObjectField>.sayHello
                = <CreateJS>function</CreateJS> () {'\{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Hello!"</Commentaries>)
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
        id: uuid(),
        title: <>Context</>
      },
      {
        id: uuid(),
        text: <>
          <div>This - arata la obiectul curent.</div>
          <div>Se foloseste (forma generala):</div>
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>function</CreateJS>.<ObjectField>bind</ObjectField> / <ObjectField>call</ObjectField> / <ObjectField>apply</ObjectField> (newBind)
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: uuid(),
        title: <h5>Methods</h5>
      },
      {
        id: uuid(),
        list: {
          content: [
            {
              id: uuid(),
              listItem: <><b><ObjectField>Bind</ObjectField></b> - returneaza o noua functie cu care schimba obiectul
                din parametru, cu obiectul
                current. Cu alte cuvinte, leaga obiectul din parametru dat pentru {'->'} (this) facandul parinte.
              </>
            },
            {
              id: uuid(),
              listItem: <><b><ObjectField>Call</ObjectField></b> - lucreaza echivalent ca Bind, doar ca apeleaza functia
                creata. Nu o
                returneaza!
              </>
            },
            {
              id: uuid(),
              listItem: <><b><ObjectField>Apply</ObjectField></b> - lucreaza echivalent ca Bind + Call, doar ca:
                <div>1 parametru - obiectul folosit</div>
                <div>2 parametru - un massiv cu parametrii functiei (daca are parametri)</div>
              </>
            },
            {
              id: uuid(),
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
              id: uuid(),
              codeItem: <><CreateJS>function</CreateJS> <JsCode>hello</JsCode>() {'{'}</>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Hello\n"</Commentaries>, <JsCode>this</JsCode>)</>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>const</CreateJS> <ObjectField>person</ObjectField> = {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>name</ObjectField>: <Commentaries>'Vladilen'</Commentaries><CreateJS>,</CreateJS></>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <><ObjectField>age</ObjectField>: <Numbers>25</Numbers><CreateJS>,</CreateJS></>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <><ObjectField>sayHello</ObjectField>: <JsCode>hello</JsCode><CreateJS>,</CreateJS></>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>sayHelloWindow</ObjectField>: <JsCode>hello</JsCode>.<JsCode>bind</JsCode>(<ObjectField
                mode={'italic'}>document</ObjectField>)</>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <JsCode>logInfo</JsCode>: <CreateJS>function</CreateJS> (job<CreateJS>,</CreateJS> phone) {'{'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>group</JsCode>(<Commentaries>`</Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'}
                <Commentaries>info`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Name
                is </Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'})</>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Have
                `</Commentaries>{'${'}<JsCode>this</JsCode>.<ObjectField>name</ObjectField>{'}'}
                <Commentaries>age`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Job is
                `</Commentaries>{'${job}'}<Commentaries>`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>`Phone is
                `</Commentaries>{'${phone}'}<Commentaries>`</Commentaries>)</>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <><ObjectField>console</ObjectField>.<JsCode>groupEnd</JsCode>()</>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>{'}'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
        id: uuid(),
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
        id: uuid(),
        text: <>Structura generala:</>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <><CreateJS>function</CreateJS> <JsCode>urlGenerator</JsCode>(domain) {'{'}</>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <><CreateJS>return</CreateJS> <CreateJS>function</CreateJS> (url) {'{'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <><CreateJS>return </CreateJS>
                <Commentaries>`https//</Commentaries>{'${url}'}<Commentaries>.</Commentaries>{'${domain}'}<Commentaries>`</Commentaries></>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>{'}'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
        id: uuid(),
        text: <>Se foloseste:</>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>const</CreateJS>&nbsp;
                <ObjectField>comUrl</ObjectField> = <JsCode>urlGenerator</JsCode>(<Commentaries>"com"</Commentaries>)
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
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
        id: uuid(),
        text: <>Rezultat:</>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
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
        id: uuid(),
        title: <>Async</>
      },
      {
        id: uuid(),
        text: <>Sunt metodele/procedeele apelate in mod async (in <b>Web Api</b>), nu in <b>Call Stack</b></>
      },
      {
        id: uuid(),
        text: <>Documentatia: <DefaultLink href={'http://latentflip.com/'} value={<>http://latentflip.com/</>}/></>
      },
      {
        id: uuid(),
        text: <h5>Methods:</h5>
      },
      {
        id: uuid(),
        text: <>Metodele principale - <JsCode>setTimeout</JsCode>()</>
      },
      {
        id: uuid(),
        text: <h5>Examples:</h5>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>async</CreateJS> <CreateJS>function</CreateJS> <JsCode>getDataAPI</JsCode>() {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <><CreateJS>try</CreateJS> {'{'}</>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Starting..."</Commentaries>)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>await</CreateJS>.<JsCode>delay</JsCode>(<Numbers>2000</Numbers>)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <Commentaries>// Get data using fetch</Commentaries>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>const</CreateJS> data = <CreateJS>await</CreateJS> <JsCode>fetch</JsCode>(<ObjectField
                mode={'italic'}>jsonURL</ObjectField>)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <Commentaries>// Convert into json format</Commentaries>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>const</CreateJS> jsonData = <CreateJS>await</CreateJS> data.<JsCode>json</JsCode>()
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(<Commentaries>"Data:
                "</Commentaries><CreateJS>,</CreateJS> jsonData)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'} <CreateJS>catch</CreateJS> (e) {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(e)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
        id: uuid(),
        title: <>Promise</>
      },
      {
        id: uuid(),
        text: <>
          <b>Promise</b> - sunt create pentru a usura lucrul operatiilor asinchrone. Nu se creeaza callback-uri
          inauntrul callback-urilor, de aceea se foloseste doar un metod "then"
        </>
      },
      {
        id: uuid(),
        list: {
          content: [
            {
              id: uuid(),
              listItem: <>
                <b><CreateJS>new</CreateJS>
                  <JsCode>Promise</JsCode>((<ObjectField>resolve</ObjectField><CreateJS>,</CreateJS>
                  <ObjectField>reject</ObjectField>) {'=>'} {'{'}<Commentaries>content</Commentaries>{'}'})</b> -
                promise reprezintă un class in interiorul căruia trebuie de creat un callback
              </>
            },
            {
              id: uuid(),
              listItem: <>
                <b><ObjectField>resolve</ObjectField></b> - se apeleaza atunci cand dorim sa se termine operatia
                asinchrona cu status 'Success'
              </>
            },
            {
              id: uuid(),
              listItem: <>
                <b><ObjectField>reject</ObjectField></b> - se apeleaza atunci cand dorim sa se termine operatia
                asinchrona cu status 'Error'
              </>
            },
            {
              id: uuid(),
              listItem: <>
                <b>.<JsCode>then</JsCode></b> - dupa ce sa indeplinit promise-ul(cu success) poate fi apelat (de mai
                multe ori) si de realizat logica.
              </>
            },
            {
              id: uuid(),
              listItem: <>
                <b>.<JsCode>cache</JsCode></b> - dupa ce sa indeplinit promise-ul si are status 'Error', se indeplineste
                acest metod. Se foloseste ca ultima operatie a promise-ului (o apelam la sfarsit)
              </>
            },
            {
              id: uuid(),
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
        id: uuid(),
        list: {
          content: [
            {
              id: uuid(),
              listItem: <>
                <b><JsCode>Promise</JsCode>.<ObjectField>all</ObjectField></b> - primeste un massiv din promise-uri se
                indeplineste atunci cand se indeplineste primul promise
              </>
            },
            {
              id: uuid(),
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
        id: uuid(),
        title: <>Objects</>
      },
      {
        id: uuid(),
        text: <>
          <b><ObjectField>Object</ObjectField>.<JsCode>create</JsCode></b> - creeaza un obiect cu ajutorul obiectului
          global <b>"Object"</b>
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>Object</ObjectField>.<JsCode>create</JsCode>({'{'}<ObjectField>prototypeForFunctions</ObjectField>{'}'}<CreateJS>,</CreateJS> {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>value</ObjectField>: value
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'})'}
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: uuid(),
        text: <>
          <b>Enumerable</b> - permite ca câmpul curent sa fie enumerat in cicluri.
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>value</ObjectField>: value,
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>enumerable</ObjectField>: <CreateJS>true</CreateJS>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: uuid(),
        text: <>
          <b>Writable</b> - permite ca câmpul curent sa poata fi rescris.
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>value</ObjectField>: value,
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>writable</ObjectField>: <CreateJS>true</CreateJS>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: uuid(),
        text: <>
          <b>Configurable</b> - permite sa putem sterge orice cheie din câmpul curent.
        </>
      },
      {
        id: uuid(),
        text: <>
          <b><CreateJS>!!!</CreateJS></b> Pentru a sterge o cheie putem folosi operatorul <CreateJS>delete</CreateJS>.
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>value</ObjectField>: value,
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>configurable</ObjectField>: <CreateJS>true</CreateJS>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>

              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>delete</CreateJS> <ObjectField>object</ObjectField>.<ObjectField>key</ObjectField>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: uuid(),
        text: <>
          <b>Getter</b> - returneaza o noua valoare
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <JsCode>get</JsCode>() {'{'}
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>return</CreateJS> value
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: uuid(),
        text: <>
          <b>Setter</b> - seteaza o noua valoare
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>key</ObjectField>: {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <JsCode>set</JsCode>(value) {'{'}
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>console</ObjectField>.<JsCode>log</JsCode>(value)
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>

              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>delete</CreateJS> <ObjectField>object</ObjectField>.<ObjectField>key</ObjectField>
              </>,
              className: 'code-row'
            },
          ]
        }
      },
      {
        id: uuid(),
        text: <>
          Class-ul Object are un prototip care permite sa salveze toate metodele obiectului "prototypeForFunctions"
        </>
      },
      {
        id: uuid(),
        text: <>
          Ciclul <b>for {'->'} in</b> trece si prin prototipurile Obiectului (prototipurile se mostenesc, de accea in
          toate prototipurile), de aceea pentru a trece doar prin Obiect (fara prototip - metodele ajutatoare a
          Obiectului) punem conditia:
        </>
      },
      {
        id: uuid(),
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>for</CreateJS> ( <CreateJS>let</CreateJS> key <CreateJS>in</CreateJS>
                <ObjectField>object</ObjectField> ) {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <Commentaries>// Daca key se contine in obiect</Commentaries>
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>if</CreateJS> ( <ObjectField>object</ObjectField>.<JsCode>hasOwnProperty</JsCode>(key)) {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
              id: uuid(),
              codeItem: <>
                <CreateJS>class</CreateJS> <JsCode>className</JsCode> {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <JsCode>constructor</JsCode> ( options ) {'{'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>this</CreateJS>.<ObjectField>name</ObjectField> = options.<ObjectField>name</ObjectField>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>this</CreateJS>.<ObjectField>age</ObjectField> = options.<ObjectField>age</ObjectField>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                <b>...</b>
              </>,
              className: 'code-row code-row-4space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
              id: uuid(),
              codeItem: <>
                <b><CreateJS>type</CreateJS> <ObjectField>variable</ObjectField></b>
              </>,
              className: 'code-row'
            },
          ],
          noIndex: true
        }
      },
      {
        id: uuid(),
        text: <>Example:</>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>static</CreateJS> <ObjectField>type</ObjectField> = <Commentaries>"something"</Commentaries>
              </>,
              className: 'code-row'
            }
          ],
          noIndex: true
        }
      },
      {
        id: uuid(),
        text: <>
          <div><b>Getter</b> - returneaza ceva</div>
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>get</ObjectField> <JsCode>thisGetter</JsCode>() {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>return</CreateJS> variable
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
        id: uuid(),
        text: <>
          <div><b>Setter</b> - seteaza ceva</div>
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <ObjectField>set</ObjectField> <JsCode>thisSetter</JsCode>(newValue) {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>this</CreateJS>.<ObjectField>variable</ObjectField> = newValue
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
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
        id: uuid(),
        title: <>Async, Await</>,
        text: <>!!! Pentru folosirea datelor am utilizat JsonPlaceholder</>
      },
      {
        id: uuid(),
        text: <>
          <b>Async</b> - se foloseste atunci cand in functia curenta se v-or folosi metode asinhrone. In cazul dat in
          fata functiei se apeleaza <b>async</b>
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>async</CreateJS> <CreateJS>function</CreateJS> <JsCode>functionName</JsCode>() {'{}'}
              </>,
              className: 'code-row'
            }
          ],
          noIndex: true
        }
      },
      {
        id: uuid(),
        text: <>
          <b>Await</b> - se apeleaza atunci cand intr-o functie asinchrona e nevoie sa astepte codul anumit
          (not-sinchron).
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>async</CreateJS> <CreateJS>function</CreateJS> <JsCode>functionName</JsCode>() {'{}'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                ...
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>await</CreateJS> <JsCode>delay</JsCode>(<Numbers> 2000 </Numbers>)
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                ...
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row'
            },
          ]
        },
      },
    ]
  },
  proxy: {
    id: 'proxy',
    page: [
      {
        id: uuid(),
        title: <>Proxy</>,
        text: <>
          <b>Proxy</b> - permite sa creezi un obiect care poate fi folosit in locul obiectului original. De asemenea
          poate redefini metodele obiectului cum ar fi: getter, setter. De obicei obiectele proxy sunt folosite
          pentru:`` a afisa proprietatile obiectului, validare, lua date din input s.a
        </>,
      },
      {
        id: uuid(),
        text: <>
          General function:
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>const</CreateJS> proxyTarget = [
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                {'{'}
                <ObjectField>id</ObjectField>: <Numbers>1</Numbers>, <ObjectField>name</ObjectField>: <Commentaries>"FirstName"</Commentaries> ... {'}'}
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                ...
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                ]
              </>,
              className: 'code-row'
            },
            {
              id: 'space1',
              codeItem: <></>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>const</CreateJS> proxyHandler = {'{'}
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                metods...
              </>,
              className: 'code-row code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                {'}'}
              </>,
              className: 'code-row'
            },
            {
              id: 'space2',
              codeItem: <></>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <CreateJS>const</CreateJS> newProxy = <CreateJS>new</CreateJS> <JsCode>Proxy</JsCode>( proxyTarget,
                proxyHandler )
              </>,
              className: 'code-row'
            }
          ]
        }
      },
      {
        id: uuid(),
        text: <>Proxy are 2 parametri:</>
      },
      {
        id: uuid(),
        text: <>
          <div><b>Target</b> - obiectul original</div>
          <div><b>Handler</b> - un obiect care defineste care e operatorul interceptat si cum sa redefinesti
            operatiunile interceptate
          </div>
        </>
      },
      {
        id: uuid(),
        text: <>
          Metodele(principale) obiectului Proxy:
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <div>prop = key</div>
                <div>target = object</div>
              </>,
              className: 'code-row'
            }
          ],
          noIndex: true
        }
      },
      {
        id: uuid(),
        text: <>
          <JsCode>get</JsCode> - metoda care returneaza ceva
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <Commentaries>create:</Commentaries>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <JsCode>get</JsCode>( target<CreateJS>,</CreateJS> prop<CreateJS>,</CreateJS> receiver ) {'{}'}
                <div>&nbsp;</div>
              </>,
              className: 'code-row-2space'
            },
            {
              id: uuid(),
              codeItem: <>
                <Commentaries>use:</Commentaries>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <JsCode>object</JsCode>.<ObjectField>key</ObjectField> <Commentaries>( return 'Proxy.get' method
                )</Commentaries>
              </>,
              className: 'code-row-2space'
            },
          ],
          noIndex: true
        }
      },
      {
        id: uuid(),
        text: <>
          <JsCode>set</JsCode> - metoda care rescrie o variabila
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <Commentaries>use:</Commentaries>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                <JsCode>object</JsCode>.<ObjectField>key</ObjectField> = newValue <Commentaries>( return 'Proxy.set'
                method )</Commentaries>
              </>,
              className: 'code-row-2space'
            },
          ],
          noIndex: true
        }
      },
      {
        id: uuid(),
        text: <>
          <JsCode>has</JsCode> - metoda care verifica daca proprietatea data se afla in obiect
        </>,
        code: {
          content: [
            {
              id: uuid(),
              codeItem: <>
                <Commentaries>use:</Commentaries>
              </>,
              className: 'code-row'
            },
            {
              id: uuid(),
              codeItem: <>
                key <CreateJS>in</CreateJS> object <Commentaries>( return 'Proxy.has' method )</Commentaries>
              </>,
              className: 'code-row-2space'
            },
          ],
          noIndex: true
        }
      },
    ]
  },
  proxy_examples: {
    id: 'proxy_examples',
    page: [
      {
        id: uuid(),
        title: <>Proxy Examples</>,
        text: <>
          Exemple despre proxy.
        </>,
      },
    ]
  },
  generators: {
    id: 'generators',
    page: [
      {
        id: uuid(),
        title: <>Generators</>
      },
      {
        id: uuid(),
        text: <></>
      },
    ]
  },
  arrays: {
    id: 'arrays',
    page: [
      {
        id: uuid(),
        title: <>Arrays</>
      },
      {
        id: uuid(),
        text: <></>
      },
    ]
  }
}
