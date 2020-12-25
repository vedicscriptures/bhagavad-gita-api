const mongoose = require('mongoose');

// bhagavad gita slok Schema
    const bgslokSchema = new mongoose.Schema({
        _id: String,
        chapter: Number,
        verse: Number,
        slok: String,
        transliteration: String,
        tej: Object,
        siva: Object,
        purohit: Object,
        chinmay: Object,
        san: Object,
        adi: Object,
        gambir: Object,
        madhav: Object,
        anand: Object,
        rams: Object,
        raman: Object,
        abhinav: Object,
        sankar: Object,
        jaya: Object,
        vallabh: Object,
        ms: Object,
        srid: Object,
        dhan: Object,
        venkat: Object,
        puru: Object,
        neel: Object,
    });
	
	// bhagavad gita chapter Schema
    const bgchapSchema = new mongoose.Schema({
        chapter_number: Number,
        verses_count: Number,
        name: String,
        translation: String,
        transliteration: String,
        meaning: Object,
        summary: Object,
    });
	
	// bhagavad gita models
	const bgchap = new mongoose.model("bhagavadgitachapter", bgchapSchema);
	const bgslok = new mongoose.model("bhagavadgitaslok", bgslokSchema);

module.exports = {bgslok, bgchap};
