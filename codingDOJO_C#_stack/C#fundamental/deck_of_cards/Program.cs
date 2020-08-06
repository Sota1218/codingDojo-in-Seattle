using System.Collections.Generic;
using System;

namespace deck_of_cards
{

  public class Card
  {
    string stringVal;
    string suit;
    int val;
    public Card(string stringval, string suit, int val)
    {
      this.stringVal = stringval;
      this.suit = suit;
      this.val = val;
    }


  }
  public class Deck
  {
    // private string[] Stringval = { "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King" };
    // private string[] Suit = { "Clubs", "Spades", "Hearts", "Diamonds" };
    // private int[] Val = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };

    public List<Card> cards;
    public Deck()
    {
      reset();
      shuffle();
    }
    public Deck reset()
    {
      cards = new List<Card>();
      string[] Suits = { "Clubs", "Spades", "Hearts", "Diamonds" };
      string[] Stringvals = { "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King" };
      int[] Vals = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };

      foreach (string suit in Suits)
      {
        //build out individual cards
        for (int i = 0; i < Stringvals.Length; i++)
        {
          Card noob = new Card(Stringvals[i], suit, Vals[i]);
          cards.Add(noob);
        }
      }
      return this;
    }
    public Deck shuffle()
    {
      int n = cards.Count;
      Random rand = new Random();
      while (n > 1)
      {
        n--;
        int k = rand.Next(n + 1);
        var tmp = cards[k];
        cards[k] = cards[n];
        cards[n] = tmp;
      }
      return this;
    }
    public Card deal()
    {
      if (cards.Count > 0)
      {


        Card res = cards[0];

        cards.RemoveAt(0);

        return res;
      }
      else
      {
        reset();
        return deal();
      }
    }
  }
  public class Player
  {
    string name;
    public List<Card> hand;
    public Player(string person)
    {
      this.name = person;
      this.hand = new List<Card>();
    }
    public Card draw(Deck deck)
    {
      Card noob = deck.deal();
      this.hand.Add(noob);
      return noob;
    }
    public Card discard(int i)
    {
      if (i < 0 || i > hand.Count - 1)
      {
        return null;
      }
      else
      {
        Card res = hand[i];
        hand.RemoveAt(i);
        return res;
      }
    }

  }





  class Program
  {
    static void Main(string[] args)
    {
      Deck a = new Deck();
      Player Sota = new Player("sota");
      Console.WriteLine(a.cards.Count);
      Sota.draw(a);
      Console.WriteLine(a.cards.Count);
      Console.WriteLine(Sota.hand.Count);
      Sota.draw(a);
      Sota.draw(a);
      Sota.draw(a);
      Sota.draw(a);
      Sota.draw(a);
      Sota.draw(a);
      Sota.draw(a);
      for (var i = 0; i < Sota.hand.Count; i++)
      {
        Console.WriteLine(Sota.hand[i]);
      }


    }
  }
}

