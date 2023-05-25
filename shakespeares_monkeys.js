let header, body;
let draw_best_header = 'ΑβΓδΕζЖяПюКлمرسه';
let draw_best_body = 'ΑβΓδΕζЖяПюКлمرسهλπΣφΨωИйФхЦчعغفقكمن';
let shakespeare_header, shakespeare_body;
let myP5;
function setup() {
  init();
  myP5 = this;
}

function init() {
  const mutation_rate = 0.03;
  const population_size = 200;
  shakespeare_header = document.getElementById("shakespeare_header");
  shakespeare_body = document.getElementById('shakespeare_body');
  if (shakespeare_header && providedHeader) {
    const possible_header_text = providedHeader;
    const target_header_text = possible_header_text[floor(random(possible_header_text.length))];
    header = new Population(target_header_text, mutation_rate, population_size);
  } else {
    headerFinished = true;
  }
  if(shakespeare_body && providedBody) {
    const possible_body_text = providedBody;
    const target_body_text = possible_body_text[floor(random(possible_body_text.length))];
    body = new Population(target_body_text, mutation_rate, population_size);
  } else {
    bodyFinished = true;
  }
}

function stopLoop() {
  myP5.noLoop();
}

let headerFinished = false;
let bodyFinished = false;
function draw() {
  if (header) {
    header.evolve();
    if(frameCount % 5 === 0)  {
      draw_best_header = header.best;
    }
    if (header?.finished) draw_best_header = header.best;
    if (shakespeare_header) {
      shakespeare_header.textContent = draw_best_header;      
    }

  }
  if (body) {
    body.evolve();
    if(frameCount % 5 === 0)  {
      draw_best_body = body.best;
    }
    if (body?.finished) draw_best_body = body.best;
    if (shakespeare_body) {
      shakespeare_body.textContent = draw_best_body;
    }
  }
  
  if ((headerFinished || header.finished) && (bodyFinished || body.finished)) {
    noLoop();
  }
}

class Population {
  constructor(target, rate = 0.01, num_ind = 200) {
    this.generation = 0;
    this.finished = false;
    this.target = target;
    this.mutation_rate = rate;
    this.perfect_score = 1;
    this.num_individuals = num_ind;
    this.best = '';
    this.fitness_sum = 0;
    this.max_fitness = 0;
    this.individuals = [];
    for (let i = 0; i < this.num_individuals; i++) {
      this.individuals[i] = new DNA(this.target.length);
    }
  }

  evolve() {
    if (!this.finished) {
      this.calculate_fitness();
      this.natural_selection();
      this.generate();
    }
    // this.evaluate();
  }

  // Calculate Fitness
  calculate_fitness() {
    this.fitness_sum = 0;
    for (let i = 0; i < this.individuals.length; i++) {
      const fitness = this.individuals[i].calculate_fitness(this.target);
      this.fitness_sum += fitness;
    }
  }
  // Generate mating pool
  natural_selection() {
    this.max_fitness = 0;
    for (let i = 0; i < this.individuals.length; i++) {
      if (this.individuals[i].fitness > this.max_fitness) {
        this.max_fitness = this.individuals[i].fitness;
        this.best = this.individuals[i].genes.join('');
        if (this.best === this.target) this.finished = true;
      }
    }

  }
  // Create next generation
  generate() {
    const next_generation = [];
    for (let i = 0; i < this.individuals.length; i++) {
      const parent_a = this.pickOne(this.individuals);
      const parent_b = this.pickOne(this.individuals);
      const child = parent_a.breedWith(parent_b);
      child.mutate(this.mutation_rate);
      next_generation[i] = child;
    }
    this.generation++;
    this.individuals = next_generation;
  }

  pickOne(list) {
    let index = 0;
    let r = random(0, this.fitness_sum);
    while (r > 0) {
      r -= list[index].fitness;
      index++;
    }

    return list[index-1];
  }
}

class DNA {
  constructor(target_length, child = false) {
   this.target_length = target_length;
   this.slice_point = ceil(random(0, this.target_length));
   this.genes = [];
   this.fitness = 0;
   this.accept_probability = 0.01;
   this.possible_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\'.!?,:;/@\\ αβγδεζηθικλμνξοπρστυφχψωабвгдеёжзийклмнопрстуфхцчшщъыьэюяا';
   if (!child) {
     for ( var i = 0; i < target_length; i++ ) {
       const char = this.generateRandomChar();
       this.genes.push(char);
     }
   }
  }
 
  generateRandomChar() {
     return this.possible_characters.charAt(floor(random(0, this.possible_characters.length)));
  }
 
  calculate_fitness(target) {
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      const this_ascii = this.genes[i].charCodeAt(0);
      const target_ascii = target.charCodeAt(i);
     if(this_ascii === target_ascii) score++;
    }
    this.fitness = score / target.length;
    this.fitness = pow(this.fitness, 5);
    return this.fitness;
  }
 
  breedWith(parent_b) {
   const child = new DNA(this.target_length, true);
   for (let i = 0; i < this.target_length; i++) {
     if (i < this.slice_point) child.genes[i] = this.genes[i];
     else child.genes[i] = parent_b.genes[i];
   }
   return child;
  }
 
  mutate(mutation_rate) {
   for (let i = 0; i < this.genes.length; i++) {
     const random_num = random(0,1);
     if (random_num < mutation_rate) {
       this.genes[i] = this.generateRandomChar();
     }
   }
  }
 }