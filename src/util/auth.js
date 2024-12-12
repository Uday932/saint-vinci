const connectEleve = async (login, password) => {
    const eleve = await prisma.Eleve.findFirst({
      where: {
        login: login,
      },
    });
    if (!eleve) {
      throw new Error('Identifiant ou mot de passe incorrect');
    }
    // Notez que vous devez hacher le mot de passe avant de le stocker dans la base de données
    // Pour l'exemple, je vais supposer que le mot de passe est déjà haché
    const isValidPassword = await bcrypt.compare(password, eleve.password);
    if (!isValidPassword) {
      throw new Error('Identifiant ou mot de passe incorrect');
    }
    return eleve;
  };
  
  const connectProfesseur = async (login, password) => {
    const professeur = await prisma.Professeur.findFirst({
      where: {
        login: login,
      },
    });
    if (!professeur) {
      throw new Error('Identifiant ou mot de passe incorrect');
    }
    // Notez que vous devez hacher le mot de passe avant de le stocker dans la base de données
    // Pour l'exemple, je vais supposer que le mot de passe est déjà haché
    const isValidPassword = await bcrypt.compare(password, professeur.password);
    if (!isValidPassword) {
      throw new Error('Identifiant ou mot de passe incorrect');
    }
    return professeur;
  };
  
  const connectAdministrateur = async (login, password) => {
    const administrateur = await prisma.Administrateur.findFirst({
      where: {
        login: login,
      },
    });
    if (!administrateur) {
      throw new Error('Identifiant ou mot de passe incorrect');
    }
    // Notez que vous devez hacher le mot de passe avant de le stocker dans la base de données
    // Pour l'exemple, je vais supposer que le mot de passe est déjà haché
    const isValidPassword = await bcrypt.compare(password, administrateur.password);
    if (!isValidPassword) {
      throw new Error('Identifiant ou mot de passe incorrect');
    }
    return administrateur;
  };