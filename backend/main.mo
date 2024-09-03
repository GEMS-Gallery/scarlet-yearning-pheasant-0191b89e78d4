import Nat "mo:base/Nat";

import Text "mo:base/Text";
import Time "mo:base/Time";
import Int "mo:base/Int";

actor {
  public func generateDog() : async Text {
    let timestamp = Int.abs(Time.now());
    let parts = [
      ["^___^", "q___p", "d___b", "@___@", "u___u", "m___m"],
      ["o o", "O O", "- -", "* *", "U U", "^ ^", "• •"],
      [" > ", " . ", " ~ ", " - ", " , ", " o "],
      [" \\_/", " ---", " ___", " ===", " www", " ᴥ "]
    ];
    
    func getPart(index: Nat) : Text {
      let partIndex = timestamp % (parts[index].size() : Nat);
      parts[index][partIndex]
    };

    Text.join("\n", [
      getPart(0),
      "(" # getPart(1) # ")",
      " " # getPart(2),
      getPart(3)
    ].vals())
  };
}
