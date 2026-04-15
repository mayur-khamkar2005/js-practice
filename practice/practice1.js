app.post("api/login", async (req, res) => {

    try {
        
        const {email, password} = req.body;

        if (!email || !password) {
            res.status(404).json({
                sucsses : true,
                massage : "thare all fealds needed"
            })
        }

        const user = await User.findOne({ email });
        
        res.status(200).json({
            sucsses : true,
            massage : "login check",
        })
    } catch (error) {
        
    }
})