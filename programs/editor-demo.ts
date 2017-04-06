import {Program} from "witheve";

let prog = new Program("test");
prog.attach("editor");

prog.commit("Add some data to play with.", ({find, record}) => {
  find("turtle");
  let dock1, dock2;
  let boat1, boat2, boat3, boat4;
  return [
    dock1 = record("dock", {name: "Marinara Marina", state: "MI"}),
    dock2 = record("dock", {name: "Get you some watercraft", state: "OH"}),
    boat1 = record("boat", {name: "Boaty Mcboatface", type: "vessel", dock: dock1}),
    boat2 = record("boat", {name: "H.M. Surf", type: "dinghy", dock: dock1}),
    boat3 = record("boat", {name: "No Life Raft", type: "dinghy", dock: dock2}),
    boat4 = record("boat", {name: "Jeff Ship 1", type: "catamaran", dock: dock2}),
    record("person", {name: "Josh", age: 23, boat: [boat3, boat4]}),
    record("person", {name: "Rafe", age: 43, boat: boat2}),
    record("person", {name: "Lola", age: 19, boat: boat1}),
    record("person", {name: "Jenny", bio: "The crazy cat lady.", age: 50}).add("pet", [
      record("pet", "cat", {name: "Mr. Whiskers", length: 7}),
      record("pet", "cat", {name: "Fifi", length: 12}),
      record("pet", "cat", {name: "Beth", length: 8}),
      record("pet", "cat", {name: "Steph", length: 9}),
      record("pet", "cat", {name: "Megadeth", length: 9}),
      record("pet", "cat", {name: "Rab", length: 10}),
      // record("pet", "cat", {name: "Steve", length: 6}),
    ]),
    record("person", {name: "Donny"}).add("pet", [
      record("pet", "dog", {name: "Bandit", length: 15})
    ])
  ];
});

prog.inputEAVs([["dummy", "tag", "turtle"]]);

// let fixture:RawEAV[] = [];
// appendAsEAVs(fixture, {tag: "person", name: "Josh", boat: [BOAT_1_ID, BOAT_3_ID], age: 23}, PERSON_1_ID);
// appendAsEAVs(fixture, {tag: "person", name: "Rafe", boat: BOAT_1_ID, age: 43}, PERSON_2_ID);
// appendAsEAVs(fixture, {tag: "person", name: "Lola", boat: BOAT_2_ID, age: 19}, PERSON_3_ID);
// appendAsEAVs(fixture, {
//   tag: "person", name: "Genevieve", age: 19,
//   cat: appendAsEAVs([], {tag: "cat", name: "Senor Fluf", age: 19})
// });


// appendAsEAVs(fixture, {tag: "boat", name: "Boaty Mcboatface", type: "yacht", dock: DOCK_1_ID}, BOAT_1_ID);
// appendAsEAVs(fixture, {tag: "boat", name: "H.M. Surf", type: "dinghy", dock: DOCK_1_ID}, BOAT_2_ID);
// appendAsEAVs(fixture, {tag: "boat", name: "No Life Raft", type: "dinghy", dock: DOCK_1_ID}, BOAT_3_ID);

// appendAsEAVs(fixture, {tag: "dock", name: "Marinara Marina of Michigan", state: "MI"}, DOCK_1_ID);
