function my_levenshtein(s1, s2) {
    let sum = 0;
    if (s1.length != s2.length) {
        return -1;
    }
    else {
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] != s2[i]) {
                sum += 1;
            }
        }
        return sum;
    }
}
