const LoginCheck = async (req, res) => {

    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        res.status(404).json({
            success : true,
            massage : "abe ja na login nahi hoga tere pass sahi password nahi hai chal nikal",
        });
    }

    if(password.body === password) {
        
    }
    const check = await bcrypt.hash(password, 10);
}