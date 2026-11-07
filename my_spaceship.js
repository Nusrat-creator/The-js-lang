function my_spaceship(s1) {
    let x = 0;
    let y = 0;
    const directions = ['up', 'right', 'down', 'left'];
    let dirIndex = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] == "R") {
            dirIndex = (dirIndex + 1) % 4;
        }
        else if (s1[i] == "L") {
            dirIndex = (dirIndex - 1 + 4) % 4;
        }
        else if (s1[i] == 'A') {
            const currentDir = directions[dirIndex];
            if (currentDir === 'up') {
                y -= 1;
            } else if (currentDir === 'down') {
                y += 1;
            } else if (currentDir === 'right') {
                x += 1;
            } else if (currentDir === 'left') {
                x -= 1;
            }
        }
    }
    return `{x: ${x}, y: ${y}, direction: '${directions[dirIndex]}'}`;
}
