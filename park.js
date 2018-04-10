const Park = function(name) {
  this.name = name;
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaursByType = function (type) {
  for (let i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].type === type) {
      this.enclosure.splice(i, 1);
      i--;
    }
  }
};

Park.prototype.countDinosaursByType = function (type) {
  let count = 0;
  for (let i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].type === type) {
      count ++;
    }
  }
  return count;
};

Park.prototype.countDinosWithOffSpringOfX = function (offspring) {
  let count = 0;
  for (let i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].offspring === offspring) {
      count ++;
    }
  }
  return count;
};

Park.prototype.dinosWithOffSpringHigherThanX = function (offspring) {
  const dinosWithOffSpringHigherThanX = [];
  for (let i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].offspring > offspring) {
      dinosWithOffSpringHigherThanX.push(this.enclosure[i])
    }
  }
  return dinosWithOffSpringHigherThanX;
};

Park.prototype.noOfDinosAfterYearOne = function () {
  const countBeg = this.enclosure.length;
  let yearOneOffspring = 0;
  for (let i = 0; i < this.enclosure.length; i++) {
    yearOneOffspring += this.enclosure[i].offspring;
  }
  return countBeg + yearOneOffspring;
};

Park.prototype.noOfDinosAfterYearTwo = function () {
  let count = 0;
  for (let i = 0; i < this.enclosure.length; i++) {
    count += (this.enclosure[i].offspring + 1) ** 2;
  }
  return count;
};

Park.prototype.noOfDinosAfterNoOYears = function (noOfYears) {
  let count = 0;
  for (let i = 0; i < this.enclosure.length; i++) {
    count += (this.enclosure[i].offspring + 1) ** noOfYears;
  }
  return count;
};

module.exports = Park;
