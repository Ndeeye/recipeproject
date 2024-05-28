const membreService = require('../services/membreService.js');

async function getAllMembers(req, res) {
    try {
        const membres = await membreService.getAllMembers();
        res.json(membres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getMemberById(req, res) {
    const memberId = req.params.id;
    try {
        const membre = await membreService.getMemberById(memberId);
        if (!membre) {
            res.status(404).json({ error: 'Member not found' });
            return;
        }
        res.json(membre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getMemberByEmailAndPassword(req, res) {
    const { email, password } = req.body;
    try {
        const membre = await membreService.getMemberByEmailAndPassword(email, password);
        if (!membre) {
            res.status(404).json({ error: 'Member not found' });
            return;
        }
        res.json(membre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createMember(req, res) {
    const memberData = req.body;
    try {
        const newMember = await membreService.createMember(memberData);
        res.status(201).json(newMember);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateMember(req, res) {
    const memberId = req.params.id;
    const memberData = req.body;
    try {
        const updatedMember = await membreService.updateMember(memberId, memberData);
        res.json(updatedMember);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteMember(req, res) {
    const memberId = req.params.id;
    try {
        await membreService.deleteMember(memberId);
        res.json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllMembers,
    getMemberById,
    getMemberByEmailAndPassword,
    createMember,
    updateMember,
    deleteMember
};
