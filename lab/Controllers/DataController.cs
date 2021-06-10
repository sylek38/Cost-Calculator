using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace lab.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class DataController : Controller
    {
        private DataStorage _storage;

        //constructor
        public DataController(DataStorage storage)
        {
            _storage = storage;
            //_storage.Data = new List<Item>();
           // _storage.Data.AddRange(new[]
            //{
            //new Item
            //{
             //   Amount = 10,
             //   Name = "item1",
            //},
            //new Item
            //{
             //   Amount = 20,
             //   Name = "item1",
            //},
            //
            //});
        }

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return _storage.Data;
        }

        [HttpPost]
        // POST http://localhost:<port>/data HTTP/1.1
        //
        //newData:xxxx
        public ActionResult Post([FromBody] Item newData)
        {
            _storage.Data.Add(newData);
            return Ok();
        }
    }
}
