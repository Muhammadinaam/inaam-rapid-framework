using System;
using System.Collections.Generic;
using System.Text;

namespace inaam_rapid_asp_net_core.Form
{
    public class FormItem
    {
        public string Label { get; set; }
        public string Type { get; set; }
        public string CreateValidation { get; set; }
        public string ClassName { get; set; }
        public Dictionary<string, string> Props { get; set; }
        public List<FormItem> ChildrenFormItems { get; set; }
    }
}
