// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random hidden talent to the page.
 */
function addRandomFact() {
  const facts =
      ['I know over 100 digits of pi!', 'I play piano', 'I can play French Horn', 'I can play guitar', 'I can play saxophone', 'I can speak a little Spanish!'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}
function dataFetch() {
  console.log('Fetching data.');
  
  const dataPromise= fetch('/data');
  
  dataPromise.then(handleData);
}

function handleData(data) {
  console.log('Handling the Data');

  const textPromise = data.text();
  
  textPromise.then(addGreetingToDom);
}

function addGreetingToDom(greeting) {
  console.log('Adding greeting to DOM: '+ greeting)
  
  const greetingContainer = document.getElementById('greeting-container');
  
  greetingContainer.innerText = greeting;
}

function getData() {
  fetch('/data').then(data => data.text()).then((greeting) => {
    document.getElementById('greeting-container').innerText = greeting;
  });
}
