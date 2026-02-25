/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
    'main': 'main.ogg',
	'fantastico': 'fantastico.m4a',
	'gingira': 'gingira.m4a',
	'waves': 'waves.m4a',
	'rain': 'rain.m4a',
	'fight': 'fight.m4a',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'thud': 'thud.m4a',
	'thump': 'thump.mp3',
	'crash': 'crash.m4a',
	'paws': 'paws.m4a',
	'energy': 'energy.m4a',
	'sand': 'sand.m4a',
	'water': 'water.m4a',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'map1': 'map1.png',
	'map2': 'map2.png',
	'map3': 'map3.png',
});


// Define the Characters
monogatari.characters ({
	'n': {
		name: 'Nate',
		color: '#801c1c',
		directory: 'Nate',
		sprites: {
			normal: 'normal.png',
			angry: 'angry.png',
			happy: 'happy.png',
			aw: 'aw.png',
			closed: 'closed.png',
			erm: 'erm.png',
			hot: 'hot.png',
			oh: 'oh.png',
			really: 'really.png',
			serious: 'serious.png',
			sleepy: 'sleepy.png',
			surprised: 'surprised.png',
		}
	},

	'mom': {
		name: 'Nateʼs Mom',
		directory: 'Mom',
		color: 'rgb(210, 105, 0)',
		sprites: {
			normal: 'Mom.png'
		}
	},

	'w':{
		name: 'Whisper',
		directory: 'Whisper',
        color: 'rgb(116, 141, 210)',
		sprites: {
			normal: 'normal.png',
			angry: 'angry.png',
			angry2: 'angry2.png',
			aw: 'aw.png',
			blush: 'blush.png',
			pad: 'check.png',
			happy: 'happy.png',
			ko: 'ko.png',
			oh: 'oh.png',
			surprised: 'surprise.png',
			surprised2: 'super_surprise.png',
		}
	},

	'j': {
		name: 'Jibanyan',
		directory: 'Jibanyan',
		color: 'rgb(231, 77, 51)',
		sprites: {
			normal: 'normal.png',
			angry: 'angry.png',
			angry2: 'angryclosed.png',
			blush: 'blush.png',
			cry: 'cry.png',
			happy: 'happy.png',
			larp: 'larp.png',
			mercury: 'mercury.png',
			oh: 'oh.png',
			sad: 'sad.png',
			surprised: 'surprised.png',
			swirls: 'swirls.png',
		}
	},

	's': {
		name: 'Smogmella',
		directory: 'Smogmella',
		color: 'rgb(32,115,106)',
		sprites: {
			normal: 'normal.png',
			mercury: 'mercury.png',
		}
	},

	'a': {
		name: 'Aliens',
		directory: 'Aliens',
		color:'rgb(70, 79, 82)',
		sprites: {
			normal: 'normal.png', 
		}
	},

	'm': {
		name: 'Death Mercury',
		directory: 'Mercury',
		color: 'rgb(9, 36, 68)',
		sprites: {
			normal: 'normal.png',
		}
	},

	'g': {
		name: 'Gorgeous Mercury',
		directory: 'Gorgeous',
		color: 'rgb(9, 36, 68)',
		sprites: {
			normal: 'normal.png'
		}
	},

	'mi': {
		name: 'Mika',
		directory: 'Mika',
		color: 'rgb(226, 79, 117)',
		sprites: {
			normal: 'normal2.png',
			flip: 'normal_flip.png',
		}
	},

	'?': {
		name: '???',
		color: 'black',
	},

	'd': {
		name: 'Mercury Dandory',
		directory: 'Dandory',
		color:'rgb(34, 65, 92)',
		sprites: {
			normal: 'normal2.png',
		}
	},

	'asu': {
		name: 'Asu',
		directory: 'Asu',
		color: 'rgb(43, 97, 80)',
		sprites: {
			normal: 'normal.png',
			happy: 'happy.png',
			bruh: 'bruh.png',
			angry: 'angry.png',
			mercury: 'mercury3.png',
		}
	},

	'ginga': {
		name: 'Galaxy Watch',
		directory: 'Ginga',
		color: 'rgb(11, 53, 165)',
		sprites: {
			normal: 'normal.png',
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene map1 with fadeIn',
		'play music fantastico once with loop',
		'show character mom normal at right with fadeIn',
		'mom Donʼt go too far away from the beach after you drop off your luggage!',
		'show character n happy at left with fadeIn',
		'n Okay, mom!',
		'hide character mom at right with fadeOut',
		'hide character n at left with fadeOut',
		'Nate and his family have just arrived in San Fantastico for a family vacation.',
		'Too excited to sit still, he decides to explore the town.',

		'show character w happy at right with fadeIn',
		'w Well, having a family vacation’s certainly nice, isn’t it?',
		'show character n happy at left with fadeIn',
		'n Yeah! Dad said he’d take me fishing at the beach later!',
		'show character j happy at center with fadeIn',
		'j Tuna! Nyate, I wanna eat tuna!',
		'show character w aw at right',
		'w It’s not easy to catch such a big fish...',
		'w I mean, you are a cat, why not just catch it yourself?',
		'show character n angry at left',
		'n Hey, you two better quiet down when we go fishing, or all the fish will run away!',
		'As Nate and the others were walking along, the trio suddenly heard something loud, not too far off.',
        'play sound crash',
		'<span style="color:black; font-weight:bold; font-size:50px; text-align:center;">Dooooooooooon!</span>',
		'show character n surprised at left',
		'n Woah, that was super loud!',
		'show character j surprised at center',
		'j Nya!? Is it an earthquake?!',
		'stop sound',
		'Also startled by the sound, a Yo-kai appeared in front of the panicked Nate and others.',
		'hide character j at center with fadeOut',
		'show character s normal at center with fadeIn',
		's Golly, that startled me too!',
		'n What was that? Do you have any idea, Smogmella?',
		's I have no clue, sugar, but I did see something fall down over there...',
		'show character w angry2 at right',
		'w Something fell? Let’s take a look...',
		'hide character w at right with fadeOut',
		'Whisper flies high in the sky and looks out to the sea beforing coming back down.',
		'show character w surprised at right with fadeIn',
		'w There’s definitely something there! Something big and round fell from the sky!',
		'n Huh!? What could it be!? This is totally weird!',
		'hide character s at center with fadeOut',
		'show character j surprised at center with fadeIn',
		'j This might be the work of a Yo-kai, nyan!',
		'show character n angry at left',
		'n If that’s the case, we’ve gotta do something! Let’s go!',
		'hide character n at right with slideOutRight',
		'hide character j at right with slideOutRight',
		'hide character w at right with fadeOut',
		'stop music fantastico fade 2',

		'show scene map1 with fadeIn',
		'play music main once with loop',
		'show character w surprised at right with fadeIn',
		'w Oh my! There’s something stuck in the ground!',
		'show character s normal at center with fadeIn',
		's I believe that’s what made the sound from before.',
		'show character n surprised at left with fadeIn',
		'n Hey... doesn’t that kinda look like a UFO...?',
		'hide character s at center with fadeOut',
		'show character j surprised at center with fadeIn',
		'j Oh! Someone’s coming out!',
		'hide character n at left with fadeOut',
		'hide character j at center with fadeOut',
		'hide character w at right with fadeOut',

		'show character a normal at right with fadeIn',
		'a Ah, an Earthling... We are the Mikakunin Tribe.',
		'a We have come to eliminate the people and Yo-kai of Earth.',
		'show character n surprised at left with fadeIn',
		'n W-WHAAAAT!?',
		'a You earthlings are plotting to eliminate the life forms of all planets other than Earth.',
		'n H-Hold on! We’re not planning anything like that!',
		'a We have consulted the other intelligent life forms living in the solar system.',
		'a As a result, we have communally decided to destroy planet Earth.',
		'show character m normal at center with fadeIn',
		'? And that’s just how it is. C’mon, come to your senses, Earthlings!',
		'As the mysterious voice echoed, something emitting a strong aura emerged from the sea.',
		'hide character n at left with fadeOut',
		'show character j surprised at left with fadeIn',
		'j Nya-nyan?! Who is that?',
		'a He is Death Mercury, a Mercurian.',
		'a We needed him to lend his strength to counter the forces of Earth.',
		'a We sampled the remains of The Ghoulfather that were left floating through space and successfully merged them with other intelligent life forms from the solar system.',
		'm And that’s us, the Predator Yo-kai! Haha, I’m totally bursting with energy over here!',
		'm I’m gonna submerge this whole planet in the sea with my dark rain! Hahahaha!',
		'hide character m at center with fadeOut',
		'hide character a at right with fadeOut',
		'Death Mercury laughs loudly and flies away towards the sea.',
		'hide character j at left with fadeOut',
		'show character n aw at left with fadeIn',
		'n Isn’t this, like, an alien invasion!? We have to stop it!',
		'hide character n at center with slideOutRight',
		'show character g normal at right with fadeIn',
        'play sound thud',
		'As Nate and the others try to follow Death Mercury, someone stands in their way.',
		'g I can’t allow you to make it out of here alive.',
		'show character w surprised at left with fadeIn',
		'w Could that be another Predator Yo-kai!? ...Wait a second, he seems familiar somehow...',
		'g Indeed, I am a Predator Yo-kai. I was formerly a Yo-kai from Earth who has become a follower of the Predator Yo-kai, Death Mercury!',
		'g Let’s make the destruction of the earth absolutely gorgeous!',
		'hide character w at left with fadeOut',
		'show character j normal at left with fadeIn',
		'j An earthling Yo-kai is working with the enemy, nya!?',
		'hide character j at left with fadeOut',
		'show character n surprised at left with fadeIn',
		'n Well, we can’t just let that happen!',
		'g Come on, let’s go, darling! Follow me into the gorgeous afterlife!',

		'show scene #000000ff with fadeIn',
		'A long fight later...',

		'show scene map1 with fadeIn',
		'show character g normal at center wtih fadeIn',
		'g H-how could you have defeated the power of Mercury...?',
		'g T-that was quite... the gorgeous battle...',
        'play sound thud',
		'hide character g at center with slideOutDown',
		'show character w normal at center with fadeIn',
		'w Phew... We somehow managed to win, but...',
		'show character j normal at right with fadeIn',
		'j How was he that strong, nyan?',
		'show character s normal at left with fadeIn',
		's He called it "the power of Mercury"... could that power be the source of his strength?',
		'show character w aw at center',
		'w So, even their followers are this strong... I think these Predator Yo-kai will be quite the challenge.',
		'hide character s at left with fadeOut',
		'show character n aw at left with fadeIn',
		'n But if we don’t do something, the Earth is gonna get completely submerged...!',
		'show character n angry at left',
		'n We can’t let that happen, right guys!? Let’s go after them!',

		'show scene #000000ff with fadeIn',
		'And so, the group followed Death Mercury...',

		'show scene map2 with fadeIn',
		'show character j surprised at center',
		'play music waves once with loop',
		'j Nyanya!? The town is completely flooded, nyan!',
		'show character s normal at left with fadeIn',
		's Golly... these Predator Yo-kai seem to be extremely powerful.',
		'Just then, a small figure approached the stunned Nate and friends.',
		'show character mi normal at right with fadeIn',
		'? Hey, hey, you guys are Earthlings, right?',
		'hide character j at center with fadeOut',
		'show character w normal at center with fadeIn',
		'w Oh...? Who are you?',
		'hide character s at left with fadeOut',
		'show character n surprised at left with fadeIn',
		'n "Earthlings"...? Wait, are you an alien, too?',
		'mi Yup. I’m Mika of the Mikakunin Tribe.',
		'show character n erm at left',
		'n Huh? I thought the Mikakunin Tribe looked a bit more... you know... alien-like...?',
		'mi Hmm... Maybe I’m just trying to, like, blend in with earthlings...? I think...?',
		'hide character w at center with fadeOut',
		'show character j surprised at center with fadeIn',
		'j What do you mean "you think", nyan?!',
		'mi Hehehe, sorry. I don’t remember much. I think I hit my head when the spaceship fell...',
		'hide character j at center with fadeOut',
		'show character s normal at center with fadeIn',
		's Gosh, that must have been terrible...',
		'mi Yeah... but I remember wanting to stop my people.',
		'mi All of a sudden, they started talking about how they were going to destroy the Earth. That’s just way too much!',
		'mi Why can’t we just get along...? We used to be friends with humans, right?',
		'show character n serious at left',
		'n You’re right... The Mikakunin Tribe was usually pretty friendly.',
		'hide character s at center with fadeOut',
		'show character j angry2 at center with fadeIn',
		'j Nyot to mention the weird things they were saying! What was that all about?',
		'hide character j at center with fadeOut',
		'show character w angry at center with fadeIn',
		'w The thing they said about us trying to destroy other planets? That’s just utter nonsense!',
		'hide character w at center with fadeOut',
		'show character s normal at center with fadeIn',
		's Hmmm... how about this? We could have her tag along with us.',
		'show character n angry at left',
		'n Right, let’s stop the Mikakunin Tribe together!',
		'mi Thank you! I’ll do my best!',
		'n That Predator Yo-kai seems to be heading towards the sea... Let’s go!',

		'play sound sand',
		'show scene #000000ff with fadeIn',
		'Approaching the sea, the group find...',
		'stop sound',

		'show scene map2 with fadeIn',
		'show character d normal at right with fadeIn',
		'd Alright, that’s as far as you’ll go. Let’s not interrupt Lord Death Mercury, shall we?',
		'd It would truly be a disaster if the plans for submerging the Earth were to go awry.',
		'show character w angry2 at center with fadeIn',
		'w Another Predator Yo-kai has appeared!',
		'show character n serious at left with fadeIn',
		'n Jibanyan! I’m counting on you!',
		'hide character w at center with fadeOut',
		'show character j angry at center with fadeIn',
		'play sound paws',
		'j Let’s go! Paws of Fury! Nyanyanyanyanyanyanya...!',
		'show character j sad at center',
		'j Nya?',
		'stop sound',
		'd Pfft... What’s the matter? Is that all you got?',
		'Jibanyan attacks fiercely, but it’s not very effective.',
		'hide character d at right with fadeOut',
		'show character asu bruh at right with fadeIn',
		'? Ah, you guys really are stupid... Haven’t you noticed?',
		'A young man with an arrogant attitude appeared suddenly.',
		'show character j angry at center',
		'j "Stupid"!? What’s your deal just showing up out of nowhere, nyan!?',
		'show character asu normal at right',
		'? That guy’s gotten his paws on the power of Mercury, it’s a kind of power born in an environment completely different from Earth.',
		'show character asu bruh at right',
		'? Since you guys only have the power of Earth, you don’t stand a chance against him.',
		'show character asu happy at right',
		'? And I also heard Mercurians can absorb Earth Yo-kai’s Yo-ki...',
		'show character asu bruh at right',
		'? And you do know that cat and cloud next to you are Earth Yo-kai, right?',
		'hide character j at center with fadeOut',
		'show character d normal at center with fadeIn',
		'd Hmph. Thanks for the explanation.',
		'hide character n at left with fadeOut',
		'show character s normal at left with fadeIn',
		's Oh my, so that’s what’s going on. No wonder our attacks aren’t working.',
		'hide character s at left with fadeOut',
		'show character w normal at left with fadeIn',
		'w Wait, how exactly do you know all of that!?',
		'show character asu bruh at right',
		'? Huh? Oh, um, how should I put it...',
		'show character asu normal at right',
		'? To put it in a way that you’d understand, I guess you could call me the spirit of the Earth...',
		'asu Yeah, just call me Asu.',
		'hide character w at left with fadeOut',
		'show character n normal at left with fadeIn',
		'n Oh! Maybe he came to help us!',
		'show character asu bruh at right',
		'asu Yeah, not quite.',
		'asu I was getting some pretty good shut-eye over here before you guys came along fighting these aliens at that snail’s pace of yours.',
		'asu It’s so stupid that I couldn’t sleep a wink.',
		'hide character n at left with fadeOut',
		'show character j angry at left with fadeIn',
		'j Nya!? Can someone tape this guy’s mouth shut!?',
		'hide character j at left with fadeOut',
		'show character n aw at left with fadeIn',
		'n Hah... but doesn’t that mean that we can’t win?',
		'd Of course it does. You’re going to sink gracefully to the bottom of the ocean.',
		'hide character n at left with fadeOut',
		'show character mi flip at left with fadeIn',
		'mi Oh! Wait a minute, I think I’ve got just the thing to help us win!',
		'd What the…!?',
		'stop music',
		'play music gingira once with loop',
		'mi Ta-da! <span style="color:rgb(11, 53, 165); font-weight:bold;">The Galaxy Watch!</span>',
		'Mika held up the weird-looking watch to Nate.',
		'hide character mi at left with fadeOut',
		'hide character d at center with fadeOut',
		'hide character asu at right with fadeOut',
		'show character mi normal at right with fadeIn',
		'mi Hey, put this on and point the dial at that cat friend of yours!',
		'show character n normal at left with fadeIn',
		'n Uh, like this?',
		'The watch on his arm begins to flicker violently.',
		'show character ginga normal at center with fadeIn',
		'ginga Glittering, Shining, Glittering! Glittering Galaxy! Energy Filling Complete! Type Mercury!',
		'A strange medal appeared in front of Nate.',
		'mi Set that Galaxy medal in your watch! Then it’ll give everyone the power of Mercury!',
		'n Really?! I’ll try! Galaxy medal set!',
		'ginga Galaxy medal confirmed! Cosmos Link begin!',
		'play sound energy',
		'From the Galaxy Watch to the sky, a ball of light was launched. Light then poured down like a waterfall.',
		'The light fell and enveloped Jibanyan and friends.',
		'hide character n at left with fadeOut',
		'hide character ginga at center with fadeOut',
		'hide character mi at right with fadeOut',
		'show character j mercury at left with fadeIn',
		'j Nyaha~! I’ve transformed!',
		'show character asu mercury at center with fadeIn',
		'asu Hey, not bad.',
		'show character s mercury at right with fadeIn',
		's Heh, thanks to the water’s power, my skin feels perfectly moisturized.',
		'stop sound',
		'hide character j at left with fadeOut',
		'hide character asu at center with fadeOut',
		'hide character s at right with fadeOut',
		'show character mi normal at right with fadeIn',
		'show character n happy at left with fadeIn',
		'n That’s amazing! Does this mean that the power of Mercury is inside them?',
		'mi That’s right! You have all become Galaxy Yo-kai of Mercury!',
		'show character w happy at center with fadeIn',
		'w I feel such immense powe-',
		'show character w aw at center',
		'w ...Huh? What about me?',
		'hide character w at center with fadeOut',
		'show character asu mercury at center with fadeIn',
		'asu We should be able to take this guy on with this new power.',
		'show character n angry at left',
		'n I’ll let you guys handle it this time!',
		'hide character mi at right with fadeOut',
		'show character d normal at right with fadeIn',
		'd Hmph, don’t get carried away. This is naught but a minor setback!',
		'hide character n at left with fadeOut',
		'show character w aw at left with fadeIn',
		'w Um, guys, I’m still not transformed...?',

		'show scene #000000ff with fadeIn',
		'An arduous fight later...',

		'show scene map2 with fadeIn',
		'show character n happy at left with fadeIn',
		'show character j mercury at center with fadeIn',
		'show character d normal at right with fadeIn',
		'n Haha, nice! This time our attacks are working!',
		'play sound paws',
		'j I’ll end it! Mercury Paws of Fury! NYANYANYANYANYA!',
		'd Urgh! T-the plan…!',
		'hide character d at right with slideOutDown',
		'stop sound',
		'play sound thud',
		'show character asu mercury at right with fadeIn',
		'asu Hey, this time you actually did something!',
		'j Nyahaha, of course, nyan!',
		'n All thanks to the Galaxy Watch! Thank you, Mika!',
		'hide character asu at right with fadeOut',
		'show character mi normal at right with fadeIn',
		'mi That was useful! I’m glad I brought it~!',
		'hide character j at center with fadeOut',
		'show character s mercury at center with fadeIn',
		's But I don’t think we’ll have time to relax...',
		'hide character mi at right with fadeOut',
		'show character asu mercury at right with fadeIn',
		'asu You’re right... Damn, it looks like their Yo-ki is getting stronger by the second.',
		'asu Looks like this Predator Yo-kai business is about to get real...!',
		'hide character s at center with fadeOut',
		'show character w surprised at center with fadeIn',
		'w Oh! And the black rain is also getting dangerously powerful!',
		'show character n angry at left',
		'n We need to catch up..! Let’s go, everyone!',
		'play sound sand',

		'stop music gingira with fade 3',
		'show scene #000000ff with fadeIn',
		'Continuing to follow Death Mercury...',
		'stop sound',

		'show scene map3 with fadeIn',
		'play music rain once with loop',
		'show character m normal at center with fadeIn',
		'm Gyaahaha! The sea rages, the rain pours down!',
		'm Let’s send the Earth straight to the bottom of the ocean!!',
		'show character n serious at left with fadeIn',
		'n Death Mercury! Listen to me! The people of Earth are not trying to destroy you!',
		'm Are you still trying to make up excuses?',
		'm It doesn’t even matter, man! I just can’t wait to destroy everything! Oh, I’m just dying to destroy everything!',
		'hide character m at center with fadeOut',
		'These were Death Mercury’s last words before flying away.',
		'show character asu mercury at center with fadeIn',
		'asu Tch. His destructive impulses have taken the better of him. He can’t be reasoned with.',
		'show character mi normal at right with fadeIn',
		'mi Could it be because of The Ghoulfather’s mysterious energy...?',
		'show character n angry at left',
		'n That means we’ve got no choice but to go and beat him! Let’s hurry!',
	
		'show scene map3 with fadeIn',
		'show character n serious at left with fadeIn',
		'n Wait, Death Mercury!',
		'show character m normal at center with fadeIn',
		'm I won’t be stopped by a bunch of weaklings!',
		'm I can’t believe you don’t already know that! Man, Earth really is full of idiots!',
		'play music fight once with loop',
		'hide character n at left with fadeOut',
		'show character asu mercury at left with fadeIn',
		'asu ...Is that so?',
		'show character j mercury at right with fadeIn',
		'j If you think we’re the same as before, you’re wrong, nyan!',
		'hide character asu at left with fadeOut',
		'show character w angry at left with fadeIn',
		'w We cannot sit still and ignore the danger and destruction facing the earth!',
		'hide character j at right with fadeOut',
		'show character s mercury at right with fadeIn',
		's I’d be in real trouble if they were to destroy my precious home!',
		'hide character w at left with fadeOut',
		'show character n angry at left with fadeIn',
		'n See? Earth is full of precious family and friends! I have friends here on Earth! I will never let you destroy them!',
		'hide character s at right with fadeOut',
		'show character asu mercury at right with fadeIn',
		'asu Hah, nicely put.',
		'asu Earth’s got way too much riding on it for us to just let you do whatever you please!',
		'hide character asu at right with fadeOut',
		'show character mi normal at right with fadeIn',
		'mi I don’t want anyone to get hurt... but I don’t want people to get destroyed either!!',
		'n Yeah! We have to stop this guy! Right here and now!',

		'show scene #000000ff with fadeIn',
		'After an exhausting fight...',

		'show scene map3 with fadeIn',
		'show character m normal at right with fadeIn',
		'm G-gahhh! Damn it! I... I refuse to go down, damn it!',
		'm Damn it! Damn it! DAMN IT ALL!! AAAAAAAARGH!!!!',
		'In a last ditch effort, Death Mercury unleashes his final attack.',
		'play sound water',
		'A devastating black torrent of water surges towards Nate and the others!',
		'show character asu mercury at left with fadeIn',
		'asu Oh no, you don’t!',
		'Asu’s water current cancels out Death Mercury’s, swallowing him up whole.',
		'stop sound water fade 1',
		'hide character m at right with slideOutDown',
		'play sound thud',
		'm G-GAAAAAAHHHHHHHH!!!',
		'asu You’re dead, Death Mercury!',
		'asu Hah, weren’t we weaklings, huh? Weren’t we idiots?',
		'asu All you did was look down on us, but look at us now!',
		'stop music fight with fade 3',
		'hide character asu at left with fadeOut',
		'play sound sand',
		'With that final remark, Asu begins to walk away.',
		'stop sound',
		'show character mi normal at left with fadeIn',
		'mi Oh Mr. Asu, wait!',
		'hide character mi at left with fadeOut',
		'play sound sand',
		'Mika hurriedly chased Asu.',
		'stop sound',
		'show character w aw at left with fadeIn',
		'w What’s with him? He seems awfully mad, doesn’t he?',
		'show character j mercury at right with fadeIn',
		'j What a weirdo, nyan. And he’s super rude, too!',
		'show character s mercury at center with fadeIn',
		's Hehe, he is a bit of an oddball, huh?',
		'hide character w at left with fadeOut',
		'show character n normal at left with fadeIn',
		'n Well, at least he doesn’t seem like a bad guy.',
		'show character n oh at left',
		'n More importantly, we have to check if the town is okay!',
		'n We also need to clear up the whole misunderstarding with the Mikakunin Tribe.',
		'hide character n at left with fadeOut',
		'hide character s at center with fadeOut',
		'hide character j at right with fadeOut',
		'show scene #000000ff with fadeIn',
		'stop music rain fade 3',
		'The relief was short-lived as the group hurriedly ran off.',
		'Nate and the others have once again managed to save the Earth from peril.',
		'The cold, punishing rain gradually began to dissipate, giving way to patches of the blue sky.',
		'centered GALAXY WATCH',
		'centered DEATH MERCURY ARC: END',
		'end'
	]
});