# Course: [High_JavaScript](https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=1)

<ul style="font-size: 15px">
  <li><b style="color: lightcyan">Console.Group</b> - grupeaza datele si le afiseaza in consola. Pentru a incheia group-ul se foloseste functia <b style="color: lightcyan">console.groupEnd()</b></li>
</ul>

### Methodology
**_$var_** - '$' se pune atunci cand variabila se utilizeaza ca DOM element

## Content:

1. Prototype: [https://www.youtube.com/watch?1](https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=1)
2. This (context): [https://www.youtube.com/watch?2](https://www.youtube.com/watch?v=UGapN-hrekw&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=2)
3. Closures: [https://www.youtube.com/watch?3](https://www.youtube.com/watch?v=pahO5XjnfLA&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=3)
4. Async: [https://www.youtube.com/watch?4](https://www.youtube.com/watch?v=vIZs5tH-HGQ&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=4)
5. Promise: [https://www.youtube.com/watch?5](https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=5)
6. Objects: [https://www.youtube.com/watch?6](https://www.youtube.com/watch?v=cS6nTVNzOPw&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=6)
7. Classes: [https://www.youtube.com/watch?7](https://www.youtube.com/watch?v=uLY9GXGMXaA&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=7)
8. AsyncAwait: [https://www.youtube.com/watch?8](https://www.youtube.com/watch?v=SHiUyM_fFME&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=8)
9. Proxy: [https://www.youtube.com/watch?9](https://www.youtube.com/watch?v=np08WdS9OXg&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=9)
10. Proxy Examples: [https://www.youtube.com/watch?10](https://www.youtube.com/watch?v=mSbyhHfxs04&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=10)
11. Generators: [https://www.youtube.com/watch?11](https://www.youtube.com/watch?v=7wtbNNiOh30&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=11)
12. Arrays: [https://www.youtube.com/watch?12](https://www.youtube.com/watch?v=nEabP9CYCAQ&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=12)
13. [https://www.youtube.com/watch?13]()
14. [https://www.youtube.com/watch?14]()
15. [https://www.youtube.com/watch?15]()
16. [https://www.youtube.com/watch?16]()
17. [https://www.youtube.com/watch?17]()

## Prototype

Permite sa adaugi in obiectele globale a browser-ului, obiectele proprii

## Context

This - arata la obiectul curent

Se foloseste:
```
function.bind/call/apply(newBind)
```

### Methods:

<ol style="font-size: 15px">
  <li><b style="color: lightcyan">Bind</b> - returneaza o nou functie cu care schimba obiectul din parametru, cu obiectul current. Cu alte cuvinte, leaga obiectul din parametru dat pentru -> (this) facandul parinte. </li>
  <li><b style="color: lightcyan">Call</b> - lucreaza echivalent ca <i>Bind</i>, doar ca apeleaza functia creata. Nu o returneaza!</li>
  <li><b style="color: lightcyan">Apply</b> - lucreaza echivalent ca <i>Bind + Call</i>, doar ca:<br/> 1 parametru - obiectul folosit<br/> 2 parametru - un massiv cu parametrii functiei (daca are parametri)</li>
  <li><b style="color: lightcyan">Console.Group</b> - grupeaza datele si le afiseaza in consola. Pentru a incheia group-ul se foloseste functia <b style="color: lightcyan">console.groupEnd()</b></li>
</ol>

## Closure

Structura generala:
```
function urlGenerator(domain) {
  return function (url) {
    return `https//${url}.${domain}`
  }
}
```
Se foloseste:
```
const comUrl = urlGenerator('com')
comUrl('google')
```
Rezultat:
```
https//google.com
```

## Async

Sunt metodele/procedeele apelate in mod async (in <b style="color: lightcyan">Web Api</b>), nu in <b style="color: lightcyan">Call Stack</b>

Tool pentru a intelege mai bine: [http://latentflip.com/](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

Metodele din acest video - setTimeout()

## Promise

<b style="color: lightcyan">Promise</b> - sunt create pentru a usura lucrul operatiilor asinchrone. Nu se creeaza callback-uri inauntrul callback-urilor, de aceea se foloseste doar un metod "then"

<ul style="font-size: 15px">
  <li><b style="color: lightcyan">new Promise((resolve, reject) => {content})</b> - promise class in interiorul caruia trebuie de creat un callback</li>
  <li><b style="color: lightcyan">resolve</b> - se apeleaza atunci cand dorim sa se termine operatia asinchrona cu status 'Success'</li>
  <li><b style="color: lightcyan">reject</b> - se apeleaza atunci cand dorim sa se termine operatia asinchrona cu status 'Error'</li>
  <li><b style="color: lightcyan">.then</b> - dupa ce sa indeplinit promise-ul(cu success) poate fi apelat (de mai multe ori) si de realizat logica.</li>
  <li><b style="color: lightcyan">.cache</b> - dupa ce sa indeplinit promise-ul si are status 'Error', se indeplineste acest metod. Se foloseste ca ultima operatie a promise-ului (o apelam la sfarsit)</li>
  <li><b style="color: lightcyan">.finally</b> - se indeplineste o singura data, indiferent de ce status vine error sau success, nu primeste parametri</li>
</ul>


<ul style="font-size: 15px">
  <li><b style="color: lightcyan">Promise.all</b> - primeste un massiv din promise-uri se indeplineste atunci cand se indeplineste primul promise</li>
  <li><b style="color: lightcyan">Promise.race</b> - primeste un massiv din promise-uri, se indeplineste atunci cand se indeplineste primul promise</li>
</ul>

## Object

<ul style="font-size: 15px">
  <li><b style="color: lightcyan">Object.create</b> - creeaza un obiect cu ajutorul obiectului global 'Obiect'</li>
</ul>

```
Object.create({prototypeForFunctions}, {
  key: {
    value: value
  }
})
```
**Enumerable** - permite ca câmpul curent sa fie enumerat in cicluri.
```
...
  key: {
    value: value,
    enumerable: true
  }
...
```
**Writable** - permite ca câmpul curent sa poata fi rescris.
```
...
  key: {
    value: value,
    writable: true
  }
...
```
**Configurable** - permite ca sa putem sterge orice cheie din câmpul curent.

!!! Pentru a sterge o cheie putem folosim operatorul **delete**.
```
...
  key: {
    value: value,
    writable: true
  }
...

delete object.key
```
**Getter** - returneaza o noua valoare
```
...
  key: {
    get() {
      return value
    }
  }
...
```
**Setter** - returneaza o noua valoare
```
...
  key: {
    set(value) {
      console.log(value)
    }
  }
...
```
Class-ul Object are un prototip care permite sa salveze toate metodele obiectului **"prototypeForFunctions"**

Ciclul **for -> in** trece si prin prototipurile Obiectului (prototipurile se mostenesc, de accea in toate prototipurile), de aceea pentru a trece doar prin Obiect (fara prototip - metodele ajutatoare a Obiectului) punem conditia:
```
for (let key in object) {

  // Daca key se contine in object
  if(object.hasOwnProperty(key)) {
    ...
  }
}
```
## Class
Structura class-ului:
```
class className {
  constructor(options) {
    this.name = options.name
    this.age = options.age
    ...
  }
}
```
### Tipuri de variabile:
- **Static** - variabila data poate fi schimbata doar din interiorul class-ului
```
type variable

ex: static type = 'something'
```
- **Getter** - returneaza ceva
- **Setter** - seteaza ceva
```
// Getter:
get thisGetter() {
  return variable
}

// Setter:
set thisSetter(newValue) {
  this.variable = newValue
}
```

## Async Await

Pentru folosirea datelor la aceasta tema am folosit JsonPlaceholder 

**Async** - se foloseste atunci cand in functia curenta se v-or folosi metode asinhrone. In cazul dat in fata functiei se apeleaza **`async`**

```
async function functionName() {}
```
 
**Await** - se apeleaza atunci cand intr-o functie asinchrona e nevoie sa astepte codul anumit (ne-sinchron).

```
async function functionName() {
  ...
  await delay(2000)
  ...
}
```

## Proxy

**Proxy** permite sa creezi un obiect care poate fi folosit in locul obiectului original. De asemenea poate redefini metodele obiectului cum ar fi getter si/sau setter.
De obicei obiectele proxy sunt folosite pentru:`` a afisa proprietatile obiectului, validare, lua date din input s.a

General function:

```
const proxyTarget = [
  {id:1, name: 'FirstName' ...}
  ...
]

const proxyHandler = {
 metods...
}

const newProxy = new Proxy(proxyTarget, proxyHandler)
```


Proxy are 2 parametri:

**Target** - obiectul original</br>
**Handler** - un obiect care defineste care e operatorul interceptat si cum sa redefinesti operatiunile interceptate

**Metodele(principale) obiectului Proxy:**</br>

```
prop = key
target = object
````

`get` - metoda care returneaza ceva
```
create:
  get(target, prop, receiver) {}

use:
  object.key (return 'Proxy.get' method)
```
`set` - metoda care rescrie o variabila
```
use:
  object.key = newValue (return 'Proxy.set' method)
```
`has` - metoda care verifica daca proprietatea data se afla in obiect
```
use:
  key in object  (return 'Proxy.has' method)
```
`deleteProperty` - metoda care se apeleaza cand se sterge o proprietate(key) din obiect
```
use:
  delete object.key (return 'Proxy.deleteProperty' method)
```
`ownKeys` - metoda care returna cheile obiectului intr-un array
```
use:
  Reflect.ownKeys(object) (return 'Proxy.ownKeys' method)
```

## Examples Proxy
 
Example:
1. Wrapper
2. Hidden properties
3. Optimization

**Optimization**
```
create:
  const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
      const index = {}
      args.forEach(item => index[item.id] = item)
  
      // return new target(...args)
      return new Proxy(new target(...args), {
        get(arr, prop) {
          switch (prop) {
            case 'push':
              return item => {
                index[item.id] = item
                arr[prop].call(arr, item)
              }
            case 'findById':
              return id => index[id]
            default:
              return arr[prop]
          }
        }
      })
    }
  })
  
use:
  const users = new IndexedArray([
  {id: 1, name: 'Vlad', ... },
  ...
])
```

## Generators

**Generator** - obiect returnat de la o functie generator, confirma protocoalele: iterable, iterator. (async await utilizeaza generatore, se folosesc uneori in loc de async await)

**Function Generator** - functie care returna un generator obiect, sintaxa reprezinta o functie cu `'*'`, `function*`.

```
function* generator() {}
```

**Yield** - salveaza valoarea generatului

```
function* generator() {
  ...
  yield value
  ...
}
```

**Generator.next()** - functie care permite sa obtii un obiect cu valoarea generatului
- value - valoarea generatului
- done - (true/false) daca: _true_ - nu mai exista variabile in generator, _false_ - exista variabile

```
generator.next()    /    generator.next().value   /   generator.next().done
```

**_For Of:_** - citeste string-ul pe caractere sau massiv-ul iterativ.
```
// String
for (let k of 'Hello') {
  console.log(k)          //H e l l o
}

// Array
for (let k of [1,1,2,3,5,8,13]) {
  console.log(k)          //1 1 2 3 5 8 13
}
```
_**Symbol**_ - class care permite lucrul cu simbolurile

_**Symbol.iterator**_ - cheie din class-ul Symbol

## Arrays

- **ForI** - se foloseste pentru a manipula mai extins cu array-ul, sau a faca diferite operatii, este un metod mai extins doar ca codul nu e citibil
- **ForOf** - se foloseste pentru a trece prin elementele parametrului, fie string sau array
- **ForEach** - se foloseste pentru a trece prin Array, fara al modifica
- **Map** - se foloseste pentru a manipula cu continutul din Array (map lucreaza mai repede ca _forEach_)
- **Filter** - se foloseste pentru a filtra un array
- **Reduce** - se foloseste pentru a afla suma elementelor/numara ceva.
- **Find** - se foloseste pentru a gasi ceva in array si a returna elementul.
- **FindIndex** - se foloseste pentru a gasi ceva in array si a returna indexul elementului.
- **Sort** - sorteaza elementele.

**Another:**
- **Every** - daca fiecare element din array indeplineste conditia, return true, daca nu - false.
- **Join** - permite sa convertesti un array intr-un string utilizand un separator