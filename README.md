# Dungeon Game

Dungeon style Roblox game. Have been working on Roblox for the last few years on and off and want to complete something now.

## Table of Contents

-   [Credits](#credits)
-   [Items](#items)
    -   [Tiers](#tiers)
    -   [Rarities](#rarities)
    -   [Armor and Weapon](#armor-and-weapons)
    -   [Spells](#spells)
-   [Data Structure](#data-structure)

### Credits:

-   [Intrinsic](https://www.roblox.com/users/2710677940/profile): Helping me learn the Roblox API and converting to Roblox-TS.

-   [SirPixel](https://www.roblox.com/users/68081469/profile): Helped with giving me some ideas for making a dungeon game as well as motivation.

-   [Flamework Template](https://github.com/rbxts-flamework/template): Base point for the project.

## Items

### Tiers

Tiers are the base for item configurations to define how valuable the item is.

| Tier     | Weight | Ratio |
| -------- | ------ | ----- |
| Basic    | 0.45   | 45%   |
| Advanced | 0.35   | 35%   |
| Expert   | 0.18   | 15%   |
| Master   | 0.02   | 2%    |

### Rarities

Rarities are based on the scale multiplier for the unique data for the item.

| Rarity    | Minimum | Maximum | Ratio |
| --------- | ------- | ------- | ----- |
| Common    | 0.00    | 0.38    | 38%   |
| Uncommon  | 0.38    | 0.66    | 28%   |
| Rare      | 0.66    | 0.87    | 21%   |
| Epic      | 0.87    | 0.10    | 13%   |
| Legendary | -       | -       | -     |

Legendary is only applied to Master Tier items.

### Armor and Weapons

Each role (Warrior, Mage, and Tank) will have 4 armor/weapon sets per chapter.

-   **Helmet**
    -   Tier 1
    -   Tier 2
    -   Tier 3
    -   Tier 4
-   **Body Armor**
    -   Tier 1
    -   Tier 2
    -   Tier 3
    -   Tier 4

### Spells

Each role (Warrior, Mage, and Tank) will have 2 Advanced spells per chapter. Eventually we will introduce Legendary spells.

-   Eventually will introduce Legendary spells.

### Item Generation

1. Generates a tier based on the weighted values
2. Finds the items of that tier (and kind if passed through)
3. Picks one of the random items from the list
4. Generates unique data for the item
5. Returns item

## Datastore

-   WORK IN PROGRESS
-   This game is currently using [Lapis](https://github.com/nezuo/lapis).
-   State is managed with [Reflex](https://littensy.github.io/reflex/)

### Data Structure

Data:

-   Profile

    -   Coins (Number)
    -   Gems (Number)
    -   Dailies (Structure)
        -   Last Collected (Date)
        -   Current Streak (Number)
        -   Overall Collected (Number)

-   Inventory

    -   Equipped Items (Structure)
        -   Helmet - Item
        -   Body Armor - Item
        -   Weapon - Item
        -   Spell Primary - Item
        -   Spell Secondary - Item
    -   Stored Items (Array of Items)
