const AnimalShelter = require('./animalShelter');

test('enqueue and dequeue operations', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({ species: "dog", name: "Buddy" });
    expect(shelter.dequeue("dog")).toEqual({ species: "dog", name: "Buddy" });
});

test('dequeue from an empty shelter', () => {
    const shelter = new AnimalShelter();
    expect(shelter.dequeue("cat")).toBe(null);
});

test('enqueue multiple animals and dequeue', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({ species: "cat", name: "Luna" });
    shelter.enqueue({ species: "dog", name: "Max" });
    shelter.enqueue({ species: "cat", name: "Simba" });
    expect(shelter.dequeue("dog")).toEqual({ species: "dog", name: "Max" });
    expect(shelter.dequeue("cat")).toEqual({ species: "cat", name: "Luna" });
    expect(shelter.dequeue("cat")).toEqual({ species: "cat", name: "Simba" });
});
