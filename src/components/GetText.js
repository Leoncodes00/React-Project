export default () => {
    const texts = [        
        "There is no greater threat to the critics and cynics and fearmongers than those of us who are willing to fall because we have learned how to rise.",
        "People think a soul mate is your perfect fit, and that's what everyone wants. But a true soul mate is a mirror, the person who shows you everything that is holding you back, the person who brings you to your own attention so you can change your life.",
        "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
        "Beautiful means full of beauty. Beautiful is not about how you look on the outside, beautiful is about what you're made of. Beautiful people spend time discovering what their idea of beauty on this earth is. They know themselves well enough to know what they love, and they love themselves enough to fill up with a little of their particular kind of beauty each day.",
        "It cannot be doubted that each of us can only see part of the picture. The doctor sees one, the patient another, the engineer a third, the economist a fourth, the pearl diver a fifth, the alcoholic a sixth, the cable guy a seventh, the sheep farmer an eighth, the Indian beggar a ninth, the pastor a tenth. Human knowledge is never contained in one person. It grows from the relationships we create between each other and the world, and still it is never complete."
    ];
    return texts[Math.floor(Math.random()*texts.length )]
}