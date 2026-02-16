export const experiments = [
  {
    id: "trolley-problem",
    title: "The Runaway Trolley",
    subtitle: "When every option has a cost",
    icon: "🚃",
    color: "indigo",
    estimatedMinutes: 4,
    steps: [
      {
        id: "intro",
        type: "narrative",
        text: "You're standing by a railway switch on a quiet afternoon. Suddenly, you hear a rumbling sound — a runaway trolley is barrelling down the tracks toward five workers who can't hear it coming. They'll definitely be killed if nothing changes.\n\nBut you notice something: there's a lever right next to you. If you pull it, the trolley will switch to a side track. The problem? There's one worker on that side track who would be killed instead.\n\nYou have seconds to decide.",
        choices: [
          {
            label: "Pull the lever — save five, but one person dies",
            nextStepId: "pulled",
            tags: ["utilitarian"],
          },
          {
            label: "Don't touch it — let events unfold naturally",
            nextStepId: "nothing",
            tags: ["deontological"],
          },
        ],
      },
      {
        id: "pulled",
        type: "outcome",
        text: "You pulled the lever. The trolley switches tracks. Five workers look up, confused but alive. On the side track, one worker never saw it coming.",
        consequence: "You actively chose to redirect the trolley, saving five lives but causing one death through your direct action.",
        perspectives: [
          {
            school: "Utilitarianism",
            explanation: "You chose the action that saved the most lives. Utilitarians like Jeremy Bentham would say you did the right thing — the best action is whatever creates the most overall good.",
            philosopherId: "bentham",
          },
        ],
        whatYouExplored: "You just chose to **act** to cause harm in order to prevent a greater harm. This is one of the biggest questions in ethics: is it okay to hurt someone if it helps more people?",
        realWorld: "Doctors face similar choices during triage — deciding who gets limited medical resources when they can't save everyone.",
        nextStepId: "footbridge",
      },
      {
        id: "nothing",
        type: "outcome",
        text: "You stood still. The trolley continued on its path. Five workers were killed. The one worker on the side track is safe, never knowing how close things came.",
        consequence: "You chose not to intervene. Five people died, but you didn't directly cause anyone's death.",
        perspectives: [
          {
            school: "Deontological Ethics",
            explanation: "Some philosophers, like Immanuel Kant, would argue that it's wrong to use someone as a means to an end — even to save others. By not acting, you avoided making yourself responsible for someone's death.",
            philosopherId: "kant",
          },
        ],
        whatYouExplored: "You chose to **allow** harm rather than **cause** it. Many people feel there's an important moral difference between killing and letting die, even if the numbers say otherwise.",
        realWorld: "This same question comes up in medicine: is there a difference between turning off life support (acting) and not starting treatment (not acting)?",
        nextStepId: "footbridge",
      },
      {
        id: "footbridge",
        type: "narrative",
        text: "Now imagine a different version. You're standing on a bridge above the tracks. The same runaway trolley is heading toward five workers.\n\nNext to you is a very large stranger. If you push them off the bridge and onto the tracks, their body would stop the trolley, saving the five workers. But the stranger would die.\n\nThere's no other way to stop it. What do you do?",
        choices: [
          {
            label: "Push the stranger — save the five workers",
            nextStepId: "pushed",
            tags: ["utilitarian"],
          },
          {
            label: "Don't push — you can't just push someone to their death",
            nextStepId: "didnt-push",
            tags: ["deontological", "virtue-ethics"],
          },
        ],
      },
      {
        id: "pushed",
        type: "outcome",
        text: "You pushed the stranger. They fell onto the tracks and stopped the trolley. Five workers survived. The stranger did not.",
        consequence: "The maths is the same as pulling the lever — one life for five. But this time you physically pushed someone to their death.",
        perspectives: [
          {
            school: "Utilitarianism",
            explanation: "A strict utilitarian would say this is the same as pulling the lever — one death is better than five, regardless of how it happens.",
            philosopherId: "bentham",
          },
        ],
        whatYouExplored: "Most people who pulled the lever won't push the stranger, even though the numbers are identical. This reveals something fascinating: our moral instincts care about **how** harm happens, not just **how much** harm happens.",
        realWorld: "This is why people react differently to drone strikes versus hand-to-hand combat, even when the outcomes are the same.",
        nextStepId: "summary",
      },
      {
        id: "didnt-push",
        type: "outcome",
        text: "You couldn't do it. Pushing a person to their death with your own hands felt fundamentally different from pulling a lever. The five workers were killed.",
        consequence: "You drew a moral line: there are some things you simply won't do, even for a good outcome.",
        perspectives: [
          {
            school: "Virtue Ethics",
            explanation: "Aristotle would ask: what kind of person pushes a stranger off a bridge? A virtuous person wouldn't, because the act itself is wrong regardless of the outcome.",
            philosopherId: "aristotle",
          },
        ],
        whatYouExplored: "You felt the difference between **doing** and **allowing**, between **impersonal** and **personal** harm. Our brains process these situations completely differently, even when logic says they should be the same.",
        realWorld: "This is why many people support policies that save lives statistically but oppose actions that directly harm identifiable individuals.",
        nextStepId: "summary",
      },
      {
        id: "summary",
        type: "result",
        title: "The Runaway Trolley",
        text: "You've just explored one of the most famous thought experiments in philosophy. It reveals the tension between **consequences** (what happens as a result) and **principles** (what you believe is right to do, regardless of outcome). There's no 'correct' answer — philosophers have been arguing about this for centuries.",
      },
    ],
  },
  {
    id: "ship-of-theseus",
    title: "The Ship of Theseus",
    subtitle: "What makes something... itself?",
    icon: "🛹",
    color: "amber",
    estimatedMinutes: 4,
    steps: [
      {
        id: "intro",
        type: "narrative",
        text: "Imagine you have a skateboard that means the world to you. Your older sibling gave it to you, and you've had countless adventures on it.\n\nOver the years, parts wear out. First you replace the wheels. Then the trucks. Then the grip tape. Eventually, you replace the deck itself. Every single original part has been swapped out, one piece at a time.\n\nBut here's the thing — is it still the same skateboard?",
        choices: [
          {
            label: "Yes — it's the same board, just with new parts",
            nextStepId: "same-board",
            tags: ["essentialist"],
          },
          {
            label: "No — once every part is different, it's a new board",
            nextStepId: "new-board",
            tags: ["materialist"],
          },
        ],
      },
      {
        id: "same-board",
        type: "outcome",
        text: "You believe it's still your skateboard. After all, you never stopped riding it — it changed gradually, and its story continued unbroken.",
        consequence: "For you, identity is about continuity and story, not physical material.",
        perspectives: [
          {
            school: "Essentialism",
            explanation: "You're thinking like many philosophers who believe that identity comes from something beyond physical parts — maybe it's the form, the purpose, or the unbroken chain of existence that makes something what it is.",
            philosopherId: "aristotle",
          },
        ],
        whatYouExplored: "You're saying identity is about **continuity** — a thing can change completely as long as it changes gradually and maintains its story.",
        realWorld: "Your body replaces almost every cell over about 7-10 years. By this logic, you're still you even though you're made of entirely different stuff than when you were born!",
        nextStepId: "twist",
      },
      {
        id: "new-board",
        type: "outcome",
        text: "You believe it's become a different board. Sure, it looks and rides the same, but none of the original material remains. It's a copy, not the original.",
        consequence: "For you, identity is tied to physical composition — what something is made of matters.",
        perspectives: [
          {
            school: "Materialism",
            explanation: "You're siding with philosophers who think identity is about the actual physical stuff something is made of. If none of the original material remains, it's a different thing — even if it looks and functions the same.",
            philosopherId: "heraclitus",
          },
        ],
        whatYouExplored: "You're saying identity is about **substance** — what something is made of is what makes it that specific thing.",
        realWorld: "This view has real implications: if you download your brain into a computer, is the digital version 'you'? A materialist might say no.",
        nextStepId: "twist",
      },
      {
        id: "twist",
        type: "narrative",
        text: "Here's where it gets really interesting. Your friend has been collecting all the old parts you replaced. They take those original wheels, trucks, grip tape, and deck, and they rebuild the skateboard exactly as it was.\n\nNow there are two skateboards: the one you've been riding (all new parts) and the one your friend rebuilt (all original parts).\n\nWhich one is YOUR skateboard?",
        choices: [
          {
            label: "The one I've been riding — my history with it matters most",
            nextStepId: "riding-one",
            tags: ["essentialist", "nominalist"],
          },
          {
            label: "The rebuilt one — it has the original parts my sibling gave me",
            nextStepId: "rebuilt-one",
            tags: ["materialist"],
          },
          {
            label: "Neither is really 'my' skateboard anymore",
            nextStepId: "neither",
            tags: ["nominalist"],
          },
        ],
      },
      {
        id: "riding-one",
        type: "outcome",
        text: "You chose the board you've been riding. It has your scratches, your memories, your story — even if every part has changed.",
        consequence: "Identity, for you, comes from relationship and experience, not material.",
        perspectives: [
          {
            school: "Personal Identity Theory",
            explanation: "You're thinking about identity the way many modern philosophers think about people — what matters is psychological continuity. Your memories and experiences with the board make it yours.",
            philosopherId: "aristotle",
          },
        ],
        whatYouExplored: "You believe identity comes from **relationships and experiences**, not from physical matter. The board you rode is 'yours' because of your connection to it.",
        realWorld: "This is how most of us think about ourselves — you feel like the same person as the kid in your earliest memories, even though your body has completely changed.",
        nextStepId: "summary",
      },
      {
        id: "rebuilt-one",
        type: "outcome",
        text: "You chose the original parts. That's the actual board your sibling gave you, reassembled. The material connection matters.",
        consequence: "Physical origin and original material define identity for you.",
        perspectives: [
          {
            school: "Material Essentialism",
            explanation: "You believe the 'real' skateboard is defined by its original physical parts. This is a common intuition — we treat original artworks as more valuable than perfect copies for the same reason.",
            philosopherId: "heraclitus",
          },
        ],
        whatYouExplored: "You believe identity is in the **material** — the original atoms and molecules that make something what it is.",
        realWorld: "This is why original paintings are worth millions while perfect reproductions are worth almost nothing. We value authenticity of material.",
        nextStepId: "summary",
      },
      {
        id: "neither",
        type: "outcome",
        text: "You think both boards have a claim, but neither is truly 'your' skateboard anymore. The original thing simply doesn't exist in either one.",
        consequence: "You've recognised that identity might not be a real, fixed property — it might just be a label we use for convenience.",
        perspectives: [
          {
            school: "Nominalism",
            explanation: "You're thinking like a nominalist — someone who believes that categories and identities are just names we give things, not real properties of the universe. 'Your skateboard' was always just a convenient label.",
            philosopherId: "heraclitus",
          },
        ],
        whatYouExplored: "You've hit on a deep insight: maybe **identity itself is an illusion** — a useful fiction our brains create to make sense of a constantly changing world.",
        realWorld: "This view challenges a lot of things we take for granted — national borders, brand identity, even personal identity might all be convenient fictions.",
        nextStepId: "summary",
      },
      {
        id: "summary",
        type: "result",
        title: "The Ship of Theseus",
        text: "This thought experiment has puzzled philosophers for over 2,000 years. It was originally about a ship, but the question applies to everything — including you. If every cell in your body is replaced over time, are you the same person? There's no settled answer, but thinking about it reveals how much our ideas about identity shape the way we see the world.",
      },
    ],
  },
  {
    id: "platos-cave",
    title: "Plato's Cave",
    subtitle: "Would you want to know the truth?",
    icon: "🕯️",
    color: "purple",
    estimatedMinutes: 5,
    steps: [
      {
        id: "intro",
        type: "narrative",
        text: "Imagine you've lived your entire life in a virtual world — let's call it the Grid. Everything feels real: your friendships, your achievements, your favourite places. You've never known anything else, and everyone you know lives there too.\n\nOne day, you discover a hidden message in the Grid's code. It says: 'This is a simulation. There is a world outside. You can leave, but you can never come back.'\n\nThe message might be real, or it might be a glitch. But it makes you wonder...",
        choices: [
          {
            label: "Try to leave — I want to know the truth, whatever it is",
            nextStepId: "leave",
            tags: ["realist", "idealist"],
          },
          {
            label: "Stay in the Grid — my life here is real enough",
            nextStepId: "stay",
            tags: ["pragmatist"],
          },
        ],
      },
      {
        id: "leave",
        type: "outcome",
        text: "You chose to leave. The transition is overwhelming. The real world is nothing like the Grid — it's messier, less beautiful, and harder to navigate. Your eyes hurt. Everything is confusing.\n\nBut slowly, you begin to see things the Grid could never show you. Real sunlight. Real wind. Things that are imperfect but genuinely there.",
        consequence: "You sacrificed comfort and familiarity for truth. The real world is harder, but it's real.",
        perspectives: [
          {
            school: "Platonic Idealism",
            explanation: "This is exactly what Plato described in his Allegory of the Cave. Prisoners chained in a cave see only shadows on a wall and think that's all there is. The philosopher is the one who breaks free and sees the real world — even though it's blinding at first.",
            philosopherId: "plato",
          },
        ],
        whatYouExplored: "You chose **truth over comfort**. Plato believed that most people live in a kind of 'cave' — accepting surface appearances without questioning whether there's something deeper.",
        realWorld: "Think about social media: you're seeing a curated, filtered version of reality. Is choosing to 'log off' and experience the messier real world similar to leaving the cave?",
        nextStepId: "return-question",
      },
      {
        id: "stay",
        type: "outcome",
        text: "You chose to stay. The Grid is your home. Your relationships are real to you, your experiences matter, and 'truth' about some other world doesn't change what you feel right now.",
        consequence: "You chose meaning and connection over abstract truth. Your life has value regardless of what lies 'outside.'",
        perspectives: [
          {
            school: "Pragmatism",
            explanation: "Pragmatist philosophers would respect your choice. They argue that 'truth' is whatever works in practice — if your life in the Grid is meaningful and functional, then in the ways that matter, it's real.",
            philosopherId: "mill",
          },
        ],
        whatYouExplored: "You chose **meaning over abstract truth**. This raises a profound question: if a 'fake' experience feels exactly like a real one, what actually makes it fake?",
        realWorld: "This is a live question right now: as VR and AI become more sophisticated, the line between 'real' and 'simulated' experiences is getting blurry.",
        nextStepId: "return-question",
      },
      {
        id: "return-question",
        type: "narrative",
        text: "Here's the next part of the puzzle. Whether you stayed or left, imagine this:\n\nYou now know the truth — the Grid is a simulation. You've seen (or at least know about) the world outside. You also know that everyone else in the Grid has no idea.\n\nDo you have a responsibility to tell them?",
        choices: [
          {
            label: "Yes — everyone deserves to know the truth",
            nextStepId: "tell-them",
            tags: ["idealist"],
          },
          {
            label: "No — they're happy, and the truth might only cause pain",
            nextStepId: "dont-tell",
            tags: ["pragmatist"],
          },
          {
            label: "Give them the choice, but don't force the truth on them",
            nextStepId: "give-choice",
            tags: ["virtue-ethics"],
          },
        ],
      },
      {
        id: "tell-them",
        type: "outcome",
        text: "You decided everyone should know. Some people thanked you. Others were furious — they didn't want to know. Some couldn't handle it and wished they could go back to not knowing.",
        consequence: "Truth can be a burden. Not everyone wants it, and sharing it can cause real pain.",
        perspectives: [
          {
            school: "Platonic Philosophy",
            explanation: "Plato believed the philosopher has a duty to go back into the cave and free others — even though the freed prisoners might be angry and resist. Knowledge carries responsibility.",
            philosopherId: "plato",
          },
        ],
        whatYouExplored: "You believe truth is inherently valuable and that people deserve it, even when it's uncomfortable. But you also discovered that **truth without consent can feel like violence**.",
        realWorld: "Whistleblowers face this exact dilemma: is revealing an uncomfortable truth always the right thing to do, even if people don't want to hear it?",
        nextStepId: "summary",
      },
      {
        id: "dont-tell",
        type: "outcome",
        text: "You kept the knowledge to yourself. Your friends continued living happily in the Grid. You carry the weight of knowing alone, but you didn't burden anyone else with it.",
        consequence: "You protected people's happiness by withholding the truth. But you also made that choice for them.",
        perspectives: [
          {
            school: "Utilitarianism",
            explanation: "From a utilitarian perspective, if telling people would cause more suffering than happiness, then staying quiet might be the moral choice. The 'truth' isn't automatically good if it makes everyone miserable.",
            philosopherId: "mill",
          },
        ],
        whatYouExplored: "You decided that **happiness matters more than truth**. But notice: by choosing not to tell, you also took away their ability to choose for themselves.",
        realWorld: "Parents make this choice all the time — shielding children from painful truths. At what age does someone earn the right to know hard things?",
        nextStepId: "summary",
      },
      {
        id: "give-choice",
        type: "outcome",
        text: "You found a way to let people discover the message themselves — without forcing it on them. Some chose to look deeper. Others saw the hint and chose to ignore it. Everyone got to decide for themselves.",
        consequence: "You respected people's autonomy while still making truth available.",
        perspectives: [
          {
            school: "Virtue Ethics",
            explanation: "This middle path honours both truth and compassion. Aristotle would call this practical wisdom — finding the right balance between extremes.",
            philosopherId: "aristotle",
          },
        ],
        whatYouExplored: "You found a balance between **truth and respect for others' autonomy**. This is one of the hardest things in ethics: caring about truth AND about people's right to choose.",
        realWorld: "This is the idea behind 'informed consent' in medicine — doctors present the facts, but patients decide what to do with them.",
        nextStepId: "summary",
      },
      {
        id: "summary",
        type: "result",
        title: "Plato's Cave",
        text: "Plato's Cave is over 2,400 years old, but it's more relevant than ever. In a world of curated feeds, deepfakes, and virtual reality, the question 'how do I know what's real?' matters more than ever. This experiment explores not just the value of truth, but the **responsibility** that comes with knowing it.",
      },
    ],
  },
  {
    id: "experience-machine",
    title: "The Experience Machine",
    subtitle: "Would you plug in?",
    icon: "🎮",
    color: "emerald",
    estimatedMinutes: 4,
    steps: [
      {
        id: "intro",
        type: "narrative",
        text: "Scientists have invented the ultimate VR system — the Experience Machine. Once you plug in, you'll have the most amazing life imaginable. You'll believe you're writing a bestselling novel, scoring the winning goal, travelling the world, falling in love — all of it feels 100% real.\n\nYou won't know you're in the machine. You'll genuinely believe these experiences are happening. And from the inside, there's no difference between this and 'real' life.\n\nThe catch: once you plug in, you're in for life. Your real body will be maintained, but you'll never return to the real world.\n\nWould you plug in?",
        choices: [
          {
            label: "Yes — an amazing life is an amazing life, real or not",
            nextStepId: "plugged-in",
            tags: ["hedonist"],
          },
          {
            label: "No — I want my experiences to be genuinely real",
            nextStepId: "stayed-out",
            tags: ["authenticity"],
          },
        ],
      },
      {
        id: "plugged-in",
        type: "outcome",
        text: "You plugged in. From your perspective, your life is incredible. You're happy, fulfilled, and experiencing things most people only dream about. You've forgotten the machine even exists.",
        consequence: "You chose maximum happiness, even if it comes from a simulation.",
        perspectives: [
          {
            school: "Hedonism",
            explanation: "Hedonists believe that pleasure and happiness are the most important things in life. If the Experience Machine delivers genuine feelings of happiness, then what's the problem? The experience of joy is what matters, not its source.",
            philosopherId: "bentham",
          },
        ],
        whatYouExplored: "You chose **feeling** over **being**. This is a perfectly logical choice if you believe that happiness is what ultimately matters in life.",
        realWorld: "We already make small versions of this choice every day — choosing an exciting movie over a boring reality, or curating our social media to feel better about our lives.",
        nextStepId: "others",
      },
      {
        id: "stayed-out",
        type: "outcome",
        text: "You refused. Your life might be ordinary, but it's real. When you accomplish something, it actually happened. When you connect with someone, they're a real person choosing to be with you.",
        consequence: "You chose authenticity over guaranteed happiness.",
        perspectives: [
          {
            school: "Existentialism",
            explanation: "Robert Nozick created this thought experiment specifically to challenge hedonism. He argued that we don't just want the experience of things — we want to actually DO them, to actually BE a certain kind of person, and to live in actual contact with reality.",
            philosopherId: "nozick",
          },
        ],
        whatYouExplored: "You value **authenticity** — the idea that experiences matter partly because they're real. This suggests that happiness isn't the ONLY thing you care about.",
        realWorld: "This is why people climb real mountains instead of just watching VR simulations, and why handmade gifts often mean more than expensive ones.",
        nextStepId: "others",
      },
      {
        id: "others",
        type: "narrative",
        text: "Now consider this: what if the machine wasn't just for you? What if everyone you love — your family, your best friends — could also plug in? They'd all live perfect, happy lives in the simulation together.\n\nBut the real world would lose them. No one would be out here doing the messy, difficult, meaningful work of actual living.\n\nWould you want your family to plug in?",
        choices: [
          {
            label: "Yes — I want them to be happy, whatever that takes",
            nextStepId: "family-in",
            tags: ["hedonist"],
          },
          {
            label: "No — I want real relationships, not simulated ones",
            nextStepId: "family-out",
            tags: ["authenticity", "existentialist"],
          },
        ],
      },
      {
        id: "family-in",
        type: "outcome",
        text: "You want the people you love to be happy, even if that happiness is simulated. If they'd never know the difference, why would you deny them a perfect life?",
        consequence: "Your love for others led you to prioritise their happiness over 'truth.'",
        perspectives: [
          {
            school: "Utilitarian Care",
            explanation: "You're applying utilitarian thinking to the people you love — if the Experience Machine maximises their wellbeing, then choosing it for them is an act of love.",
            philosopherId: "mill",
          },
        ],
        whatYouExplored: "Interesting — when it comes to others, you might make a different choice than for yourself. This reveals something about how we weigh **happiness** vs. **autonomy** when we care about someone.",
        realWorld: "Parents often face versions of this: should you let your kids believe in comfortable illusions, or expose them to harder truths?",
        nextStepId: "summary",
      },
      {
        id: "family-out",
        type: "outcome",
        text: "You want your family in the real world, even if it's harder. Real relationships — with all their messiness and difficulty — are worth more than perfect fake ones.",
        consequence: "You value real connection over simulated happiness, even for the people you love most.",
        perspectives: [
          {
            school: "Existentialism",
            explanation: "Jean-Paul Sartre argued that authentic existence requires engaging with the real world and making genuine choices. A simulated relationship, no matter how good it feels, lacks the authenticity that gives it meaning.",
            philosopherId: "sartre",
          },
        ],
        whatYouExplored: "You believe that **real relationships require real people making real choices**. A perfect simulation of love isn't actually love.",
        realWorld: "This connects to debates about AI companions — can a relationship with an AI be 'real' if the AI is programmed to always say what you want to hear?",
        nextStepId: "summary",
      },
      {
        id: "summary",
        type: "result",
        title: "The Experience Machine",
        text: "Robert Nozick created this thought experiment in 1974, and it's become one of the most important in modern philosophy. Most people refuse to plug in, which tells us something profound: **we don't just want to feel happy — we want our happiness to be connected to reality.** But as technology gets better at simulating experience, this question is becoming less hypothetical every day.",
      },
    ],
  },
  {
    id: "veil-of-ignorance",
    title: "The Veil of Ignorance",
    subtitle: "How would you design a fair world?",
    icon: "⚖️",
    color: "sky",
    estimatedMinutes: 5,
    steps: [
      {
        id: "intro",
        type: "narrative",
        text: "You've been chosen to help design the rules for a brand-new school. There's a catch though: you don't know who you'll be at this school.\n\nYou might be the most popular kid, or the shyest. You might be the star athlete or the kid in a wheelchair. You might be rich or poor, the top student or someone who struggles with every test. You might be a student, a teacher, or even the janitor.\n\nYou have to design the rules BEFORE you find out who you are. Whatever rules you set, you'll have to live with them.\n\nLet's start with the basics: how should resources be distributed?",
        choices: [
          {
            label: "Everyone gets the same resources, no exceptions",
            nextStepId: "equal",
            tags: ["egalitarian"],
          },
          {
            label: "People who work harder or achieve more should get more",
            nextStepId: "merit",
            tags: ["libertarian"],
          },
          {
            label: "Give extra resources to those who need them most",
            nextStepId: "need-based",
            tags: ["egalitarian", "communitarian"],
          },
        ],
      },
      {
        id: "equal",
        type: "outcome",
        text: "Everyone gets the same funding, same facilities, same attention. Complete equality. It sounds fair on the surface.",
        consequence: "But wait — the kid who needs a wheelchair ramp gets the same as someone who doesn't. The student who needs extra tutoring gets the same help as the one who doesn't. Is 'the same' actually 'fair'?",
        perspectives: [
          {
            school: "Strict Egalitarianism",
            explanation: "Treating everyone identically is the simplest form of fairness. But many philosophers point out that identical treatment can actually be unfair when people start from different positions.",
            philosopherId: "rawls",
          },
        ],
        whatYouExplored: "You discovered the difference between **equality** (everyone gets the same) and **equity** (everyone gets what they need to have the same opportunities). They're not the same thing!",
        realWorld: "This is a huge debate in education right now: should every school get the same funding, or should schools in poorer areas get more?",
        nextStepId: "speech",
      },
      {
        id: "merit",
        type: "outcome",
        text: "People who work hard and achieve get rewarded more. Sounds motivating! But remember — you don't know who you'll be. What if you're the kid with a learning disability who works twice as hard but still gets lower grades?",
        consequence: "Merit-based systems can reward effort, but they can also punish people for things they can't control.",
        perspectives: [
          {
            school: "Libertarianism",
            explanation: "Libertarian thinkers believe people should be rewarded based on their contributions. But critics ask: how much of our 'merit' is really just luck — being born smart, healthy, or into the right family?",
            philosopherId: "nozick",
          },
        ],
        whatYouExplored: "You raised a key question: **how much of what we achieve is really our own doing?** If talent and opportunity are partly a matter of luck, is it fair to reward them so heavily?",
        realWorld: "This is the debate behind scholarships, bonuses, and pay gaps: should we reward outcomes, effort, or something else entirely?",
        nextStepId: "speech",
      },
      {
        id: "need-based",
        type: "outcome",
        text: "Those who need the most get the most support. The kid in the wheelchair gets a ramp. The student who struggles gets a tutor. The wealthy kid gets less, because they already have advantages.",
        consequence: "This approach helps level the playing field, but some might feel it's unfair to those who don't get extras despite working hard.",
        perspectives: [
          {
            school: "Rawlsian Justice",
            explanation: "This is close to what John Rawls proposed: inequalities are only fair if they benefit the people who are worst off. Behind the Veil of Ignorance, most people would choose this — because you might be the one who needs the most help.",
            philosopherId: "rawls",
          },
        ],
        whatYouExplored: "You chose what Rawls called the **'Difference Principle'** — accepting inequality only when it helps the most disadvantaged. Most people choose this when they don't know their own position.",
        realWorld: "This is the philosophy behind progressive taxation: people who earn more pay a higher percentage, funding services for those who have less.",
        nextStepId: "speech",
      },
      {
        id: "speech",
        type: "narrative",
        text: "Good — now here's a harder question. What about free speech at this school?\n\nRemember: you don't know who you'll be. You might be someone whose opinions are popular, or someone whose beliefs are controversial. You might be someone who gets bullied, or someone whose speech others find offensive.\n\nHow should the school handle free speech?",
        choices: [
          {
            label: "Total free speech — anyone can say anything",
            nextStepId: "total-speech",
            tags: ["libertarian"],
          },
          {
            label: "Free speech with limits — no hate speech or bullying",
            nextStepId: "limited-speech",
            tags: ["communitarian", "egalitarian"],
          },
        ],
      },
      {
        id: "total-speech",
        type: "outcome",
        text: "Complete freedom of expression. Nobody's ideas are censored. But some students use that freedom to bully others, spread misinformation, or make certain groups feel unsafe.",
        consequence: "Maximum freedom for everyone — but freedom for the powerful can mean suffering for the vulnerable.",
        perspectives: [
          {
            school: "Classical Liberalism",
            explanation: "Philosophers like John Stuart Mill argued that free speech is essential, even when it's offensive — because silencing ideas is a slippery slope. But Mill also noted that speech that directly causes harm to others crosses a line.",
            philosopherId: "mill",
          },
        ],
        whatYouExplored: "You discovered the **paradox of tolerance**: if you tolerate everything, intolerant people can use that freedom to silence others. Complete freedom can actually reduce freedom.",
        realWorld: "This is exactly the debate around social media moderation: should platforms allow everything, or protect users from harmful content?",
        nextStepId: "summary",
      },
      {
        id: "limited-speech",
        type: "outcome",
        text: "Free speech with guardrails. People can express their views, but can't use speech to target or harm others. The question is: who decides where the line is?",
        consequence: "You tried to balance freedom with protection. The tricky part is defining 'harm' — different people will draw that line in different places.",
        perspectives: [
          {
            school: "Communitarian Ethics",
            explanation: "Communitarians argue that individual rights exist within a community context. Your freedom matters, but so does the wellbeing of the group. Rules against harmful speech protect everyone's ability to participate.",
            philosopherId: "rawls",
          },
        ],
        whatYouExplored: "You tried to find a **balance between individual freedom and collective wellbeing**. This is one of the hardest problems in political philosophy — and there's no perfect answer.",
        realWorld: "Every country draws this line differently. Some protect almost all speech; others ban hate speech. The debate is about where exactly to draw that line.",
        nextStepId: "summary",
      },
      {
        id: "summary",
        type: "result",
        title: "The Veil of Ignorance",
        text: "John Rawls's Veil of Ignorance is one of the most powerful tools in political philosophy. The key insight is this: **if you don't know who you'll be, you'll naturally design a fairer system** — because you have to protect against being in the worst position. It strips away self-interest and forces you to think about justice from everyone's perspective.",
      },
    ],
  },
  {
    id: "ring-of-gyges",
    title: "The Ring of Gyges",
    subtitle: "Would you be good if no one was watching?",
    icon: "💍",
    color: "rose",
    estimatedMinutes: 4,
    steps: [
      {
        id: "intro",
        type: "narrative",
        text: "You find a ring that makes you completely invisible. Not just physically — digitally too. No cameras can see you, no records are kept, and no one will ever know what you did while wearing it.\n\nYou can go anywhere, take anything, and do whatever you want with zero consequences. No one will ever find out.\n\nWhat's the first thing you'd do?",
        choices: [
          {
            label: "Something fun but harmless — sneak into a movie, explore off-limits places",
            nextStepId: "harmless",
            tags: ["virtue-ethics"],
          },
          {
            label: "Help people anonymously — leave money, stop a crime, do secret good deeds",
            nextStepId: "help",
            tags: ["virtue-ethics", "social-contract"],
          },
          {
            label: "Take advantage — get stuff for free, access things I normally can't",
            nextStepId: "advantage",
            tags: ["egoist"],
          },
        ],
      },
      {
        id: "harmless",
        type: "outcome",
        text: "You chose mischief without malice. Sneak into concerts, explore restricted areas, live a little. No one gets hurt, and you get to satisfy your curiosity.",
        consequence: "You bent the rules but didn't break anyone's trust or cause harm.",
        perspectives: [
          {
            school: "Moderate Self-Interest",
            explanation: "You're not purely selfish, but you're also not a saint. Most ancient Greek philosophers would say this is very human — we all have desires, and removing consequences reveals what we'd really do if we could.",
            philosopherId: "aristotle",
          },
        ],
        whatYouExplored: "You showed that **removing consequences changes your behaviour** — but only up to a point. You have internal limits that go beyond fear of getting caught.",
        realWorld: "The internet gives us a version of this ring — anonymity. Online, people often behave differently than they do in person. What does that reveal about human nature?",
        nextStepId: "escalation",
      },
      {
        id: "help",
        type: "outcome",
        text: "You chose to use your power for good. Anonymous acts of kindness, stopping injustice, helping people who need it — all without credit or recognition.",
        consequence: "You'd be good even when no one is watching. That says something profound about your character.",
        perspectives: [
          {
            school: "Virtue Ethics",
            explanation: "Aristotle would be proud. He believed that truly virtuous people do good because it's part of who they are — not because they want praise or fear punishment. Your goodness comes from character, not incentives.",
            philosopherId: "aristotle",
          },
        ],
        whatYouExplored: "You demonstrated what philosophers call **intrinsic morality** — being good for its own sake, not for reward or to avoid punishment. This is the highest form of ethics according to many philosophers.",
        realWorld: "Anonymous donations, secret acts of kindness, and whistleblowing are all real-world examples of people being 'good when no one is watching.'",
        nextStepId: "escalation",
      },
      {
        id: "advantage",
        type: "outcome",
        text: "You chose to take what you could get. Free stuff, special access, personal gain. If there are no consequences, why not?",
        consequence: "You acted in your own self-interest. Some would say that's honest — others would say it proves we're only 'good' because we fear punishment.",
        perspectives: [
          {
            school: "Psychological Egoism",
            explanation: "Some philosophers, like Thomas Hobbes, believed that all human behaviour is ultimately self-interested. We follow rules not because we're good, but because we're afraid of what happens if we don't. The ring just removed the fear.",
            philosopherId: "hobbes",
          },
        ],
        whatYouExplored: "You explored a provocative idea: **maybe morality is just a survival strategy**, not a real property of the universe. We're 'good' because it benefits us to cooperate, not because goodness exists independently.",
        realWorld: "Tax evasion, piracy, and cheating when 'no one will know' are all everyday examples of this. Most people bend rules when they're sure they won't be caught.",
        nextStepId: "escalation",
      },
      {
        id: "escalation",
        type: "narrative",
        text: "Time passes. You've had the ring for a year now. You've discovered something unsettling: the more you use it, the more tempted you are to push further.\n\nSmall rule-breaking led to bigger rule-breaking. The line between 'harmless fun' and 'actually wrong' has gotten blurry.\n\nYou also notice that you've started acting differently even when you're NOT invisible. You're more impatient, less considerate, more entitled.\n\nDo you keep the ring?",
        choices: [
          {
            label: "Get rid of it — it's changing who I am",
            nextStepId: "ditch-ring",
            tags: ["virtue-ethics"],
          },
          {
            label: "Keep it — the power is too useful to give up",
            nextStepId: "keep-ring",
            tags: ["egoist"],
          },
        ],
      },
      {
        id: "ditch-ring",
        type: "outcome",
        text: "You throw the ring away. It was changing you into someone you didn't want to be. The power wasn't worth the cost to your character.",
        consequence: "You recognised that unlimited power without accountability corrupts. You chose your integrity over convenience.",
        perspectives: [
          {
            school: "Virtue Ethics",
            explanation: "Plato's answer to the Ring of Gyges was that a truly just person wouldn't use it — because justice is valuable for its own sake, not just for its consequences. Being good IS the reward.",
            philosopherId: "plato",
          },
        ],
        whatYouExplored: "You discovered that **power without accountability is corrosive**. Even if no one else knows what you're doing, YOU know — and that changes who you are.",
        realWorld: "This is why we build checks and balances into governments, companies, and institutions. Unlimited power corrupts, even when the person starts with good intentions.",
        nextStepId: "summary",
      },
      {
        id: "keep-ring",
        type: "outcome",
        text: "You kept the ring. The power is too valuable, too useful. You tell yourself you'll be more careful, more disciplined. But deep down, you know the line keeps moving.",
        consequence: "You chose power over character. The question is whether you can maintain your values with unlimited temptation.",
        perspectives: [
          {
            school: "Social Contract Theory",
            explanation: "Hobbes would say this proves his point: without the threat of consequences, humans revert to self-interest. The whole reason we have laws and social norms is because we CAN'T be trusted with unlimited, unaccountable power.",
            philosopherId: "hobbes",
          },
        ],
        whatYouExplored: "You explored the idea that **morality might require external accountability**. Maybe we need rules and consequences not because we're bad, but because unlimited freedom is more than human nature can handle.",
        realWorld: "History is full of examples: from corrupt politicians to corporate scandals, power without oversight almost always leads to abuse.",
        nextStepId: "summary",
      },
      {
        id: "summary",
        type: "result",
        title: "The Ring of Gyges",
        text: "This thought experiment comes from Plato's Republic, written around 375 BC. A character named Glaucon argues that anyone with the ring would behave selfishly — that morality is just a social performance. Plato's Socrates disagrees, arguing that a truly just person would remain just even with the ring. 2,400 years later, **we're still not sure who's right.** But the question reveals a lot about what you believe about human nature.",
      },
    ],
  },
];
